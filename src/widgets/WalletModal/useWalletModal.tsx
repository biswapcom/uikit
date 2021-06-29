import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import AccountModal from "./AccountModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
  onPresentAccountModal: () => void;
}

const useWalletModal = (login: Login,
                        logout: () => void, account?: string,
                        recentTransaction?: any,
                        chainId?:any,
                        clearTransaction?: any,
                        isSwap?:any,
                        testTransactions?: any
                        ): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} />);
  const [onPresentAccountModal] = useModal(<AccountModal testTransactions={testTransactions} isSwap={isSwap} login={login} recentTransaction={recentTransaction}  chainId={chainId} account={account || ""} logout={logout} clearTransaction={clearTransaction}/>);
  return { onPresentConnectModal, onPresentAccountModal };
};

export default useWalletModal;
