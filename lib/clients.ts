import { createPublicClient, http } from "viem";
import {
  GIWA_FLASHBLOCKS_RPC_URL,
  GIWA_RPC_URL,
  giwaSepolia,
  giwaSepoliaFlashblocks,
} from "@/lib/chains";

export const flashblocksClient = createPublicClient({
  chain: giwaSepoliaFlashblocks,
  transport: http(GIWA_FLASHBLOCKS_RPC_URL),
});

// Traditional client with 2s polling
export const traditionalClient = createPublicClient({
  chain: giwaSepolia,
  transport: http(GIWA_RPC_URL),
});
