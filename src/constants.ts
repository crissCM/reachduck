import { NetworkData } from "./reach-types";

export const NETWORK_STORAGE_KEY = "active-chain";

const PROVIDERS: { [x: string]: "TestNet" | "MainNet" } = {
  TESTNET: "TestNet",
  MAINNET: "MainNet",
};

const NETWORKS: Record<string, NetworkData> = {
  ALGO: { name: "Algorand", abbr: "ALGO", decimals: 6 },
  ETH: { name: "Ethereum", abbr: "ETH", decimals: 18 },
};

export { PROVIDERS, NETWORKS };
