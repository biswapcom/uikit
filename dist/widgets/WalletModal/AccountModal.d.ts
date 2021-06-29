import React from "react";
interface Props {
    account: string;
    logout: () => void;
    login: any;
    onDismiss?: () => void;
    recentTransaction?: any;
    rowStatus?: any;
    chainId?: any;
    clearTransaction?: any;
    isSwap?: any;
    transactionsForUIKit?: any;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
