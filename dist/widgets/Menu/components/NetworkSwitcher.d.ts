import React from "react";
export interface SelectProps {
    options: OptionProps[];
    onChange?: (option: OptionProps) => void;
    currentNetwork?: number;
}
export interface OptionProps {
    label: string;
    icon: JSX.Element;
    value?: number;
    bg: string;
}
declare const NetworkSwitcher: React.FC<SelectProps>;
export default NetworkSwitcher;
