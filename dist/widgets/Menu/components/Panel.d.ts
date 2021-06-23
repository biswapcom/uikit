import React from "react";
import { PanelProps, PushedProps, PanelFooterProps } from "../types";
interface Props extends PanelProps, PushedProps, PanelFooterProps {
    showMenu: boolean;
    isMobile: boolean;
    href: string;
    togglePush: () => void;
}
declare const Panel: React.FC<Props>;
export default Panel;
