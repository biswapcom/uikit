import React from "react";
import { BSWPriceProps, FooterSupplyProps, FooterTotalProps } from "../types";
interface Props extends BSWPriceProps, FooterSupplyProps, FooterTotalProps {
    isPushed: boolean;
}
declare const Footer: React.FC<Props>;
export default Footer;
