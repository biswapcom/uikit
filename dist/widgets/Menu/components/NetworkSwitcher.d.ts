import React from "react";
export interface SelectProps {
    options: OptionProps[];
    onChange?: (option: OptionProps) => void;
}
export interface OptionProps {
    label: string;
    icon: any;
    value: any;
    bg: string;
}
declare const NetworkSwitcher: React.FC<SelectProps>;
export default NetworkSwitcher;
