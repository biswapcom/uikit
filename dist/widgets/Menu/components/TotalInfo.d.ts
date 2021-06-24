import React from "react";
interface TotalInfoTypes {
    label: string;
    value: number;
}
interface Props {
    total: Array<TotalInfoTypes>;
}
declare const TotalInfo: React.FC<Props>;
export default TotalInfo;
