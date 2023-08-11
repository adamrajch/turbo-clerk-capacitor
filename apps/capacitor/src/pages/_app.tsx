// src/pages/_app.tsx
import { ClerkProvider } from "@clerk/nextjs";
import type { AppType } from "next/app";
import "../styles/globals.css";
import { trpc } from "../utils/trpc";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ClerkProvider
      publishableKey="pk_test_dXNhYmxlLWZsZWEtMzIuY2xlcmsuYWNjb3VudHMuZGV2JA"
      {...pageProps}
    >
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default trpc.withTRPC(MyApp);
