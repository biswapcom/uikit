import Metamask from "./icons/Metamask";
// import MathWallet from "./icons/MathWallet";
// import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import BinanceChain from "./icons/BinanceChain";
import SafePalWallet from "./icons/SafePalWallet";

import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId: ConnectorNames.Injected,
    priority: 2,
  },
  // {
  //   title: "MathWallet",
  //   icon: MathWallet,
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: "TokenPocket",
  //   icon: TokenPocket,
  //   connectorId: ConnectorNames.Injected,
  // },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
    priority: 3,
  },
  {
    title: "Binance Chain",
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
    priority: 999,
  },
  {
    title: "SafePal Wallet",
    icon: SafePalWallet,
    connectorId: ConnectorNames.Injected,
    priority: 999,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
