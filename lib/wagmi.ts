import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { giwaSepolia } from "@/lib/chains";

export const config = getDefaultConfig({
  appName: "GIWA Flashblocks Demo",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "demo-project-id",
  chains: [giwaSepolia],
  ssr: true,
});
