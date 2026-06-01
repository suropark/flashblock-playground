import { defineChain } from "viem";

export const GIWA_RPC_URL =
  process.env.NEXT_PUBLIC_GIWA_RPC_ENDPOINT || "https://sepolia-rpc.giwa.io";

export const GIWA_FLASHBLOCKS_RPC_URL =
  process.env.NEXT_PUBLIC_GIWA_FLASHBLOCKS_RPC_ENDPOINT ||
  "https://sepolia-rpc-flashblocks.giwa.io";

export const GIWA_EXPLORER_URL = "https://sepolia-explorer.giwa.io";

export const giwaSepolia = defineChain({
  id: 91342,
  name: "GIWA Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: [GIWA_RPC_URL],
    },
    public: {
      http: [GIWA_RPC_URL],
    },
  },
  blockExplorers: {
    default: {
      name: "GIWA Sepolia Explorer",
      url: GIWA_EXPLORER_URL,
    },
  },
  sourceId: 11155111,
  testnet: true,
});

export const giwaSepoliaFlashblocks = defineChain({
  ...giwaSepolia,
  name: "GIWA Sepolia Flashblocks",
  rpcUrls: {
    default: {
      http: [GIWA_FLASHBLOCKS_RPC_URL],
    },
    public: {
      http: [GIWA_FLASHBLOCKS_RPC_URL],
    },
  },
});
