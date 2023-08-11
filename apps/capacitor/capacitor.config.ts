import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.turbocapacitor.app",
  appName: "@acme/capacitor",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
};

export default config;
