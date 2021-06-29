import { Login } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
    onPresentAccountModal: () => void;
}
declare const useWalletModal: (login: Login, logout: () => void, account?: string | undefined, recentTransaction?: any, chainId?: any, clearTransaction?: any, isSwap?: any, transactionsForUIKit?: any) => ReturnType;
export default useWalletModal;
