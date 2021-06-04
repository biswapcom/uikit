import React from "react";
interface Props {
    account: string;
    logout: () => void;
    onDismiss?: () => void;
    login?: any;
    recentTransaction?: any;
    rowStatus?: any;
    chainId?: any;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
