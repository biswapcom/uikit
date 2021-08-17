import React from "react";
import { Login } from "../../WalletModal/types";
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
    pendingTransactions?: number;
    recentTransaction: any;
    chainId: any;
    clearTransaction: any;
    isSwap?: boolean;
    transactionsForUIKit?: any;
}
declare const UserBlock: React.FC<Props>;
export default UserBlock;
