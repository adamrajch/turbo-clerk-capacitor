import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.turbocapacitor.app",
  appName: "@acme/turbocapacitor",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
};

export default config;
