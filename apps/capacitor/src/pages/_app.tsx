// src/pages/_app.tsx
import { ClerkProvider } from "@clerk/nextjs";
import type { AppType } from "next/app";
import "../styles/globals.css";
import { TRPCProvider } from "../utils/trpc";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ClerkProvider
      publishableKey="pk_test_dXNhYmxlLWZsZWEtMzIuY2xlcmsuYWNjb3VudHMuZGV2JA"
      {...pageProps}
    >
      <TRPCProvider>
        <Component {...pageProps} />
      </TRPCProvider>
    </ClerkProvider>
  );
};

export default MyApp;
