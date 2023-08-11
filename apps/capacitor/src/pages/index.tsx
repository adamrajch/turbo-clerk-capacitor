import type { AppRouter } from "@acme/api";
import { useAuth, UserButton } from "@clerk/nextjs";
import type { inferProcedureOutput } from "@trpc/server";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { trpc } from "../utils/trpc";

const PostCard: React.FC<{
  post: inferProcedureOutput<AppRouter["post"]["all"]>[number];
}> = ({ post }) => {
  return (
    <div className="max-w-2xl rounded-lg border-2 border-gray-500 p-4 transition-all hover:scale-[101%]">
      <h2 className="text-2xl font-bold text-[hsl(280,100%,70%)]">
        {post.title}
      </h2>
      <p>{post.content}</p>
    </div>
  );
};

const Home: NextPage = () => {
  const postQuery = trpc.post.all.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-8">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Startup{" "}
            <span className="text-[hsl(280,100%,70%)]"> Capacitor </span>{" "}
          </h1>
          <AuthShowcase />

          <div className="flex h-[60vh] justify-center overflow-y-scroll px-4 text-2xl">
            {postQuery.data ? (
              <div className="flex flex-col gap-4">
                {!postQuery.data.length ? (
                  <div>no posts </div>
                ) : (
                  <>
                    {postQuery.data.map((p) => {
                      return <PostCard key={p.id} post={p} />;
                    })}
                  </>
                )}
              </div>
            ) : (
              <p>Loading..</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { isSignedIn } = useAuth();
  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined,
    { enabled: !!isSignedIn },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {isSignedIn && (
        <>
          <p className="text-center text-2xl text-white">
            {secretMessage && (
              <span>
                {" "}
                {secretMessage} click the user button!
                <br />
              </span>
            )}
          </p>
          <div className="flex items-center justify-center">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "3rem",
                    height: "3rem",
                  },
                },
              }}
            />
          </div>
        </>
      )}
      {!isSignedIn && (
        <p className="text-center text-2xl text-white">
          <Link href="/sign-in">Sign In</Link>
        </p>
      )}
    </div>
  );
};
