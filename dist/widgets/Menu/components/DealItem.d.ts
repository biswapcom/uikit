import React from "react";
interface Props {
    isDark: boolean;
    dealName: string;
    dealDate: string;
    coupleFirst: string;
    coupleLast: string;
    dealValue: number;
    animate: boolean;
}
declare const DealItem: React.FC<Props>;
export default DealItem;
