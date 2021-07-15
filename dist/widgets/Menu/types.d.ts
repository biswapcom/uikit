import { Login } from "../WalletModal/types";
export interface LangType {
    code: string;
    language: string;
}
export interface Profile {
    username?: string;
    image?: string;
    profileLink: string;
    noProfileLink: string;
    showPip?: boolean;
}
export interface PushedProps {
    isPushed: boolean;
    pushNav: (isPushed: boolean) => void;
}
export interface NavTheme {
    background: string;
    hover: string;
}
export interface MenuSubEntry {
    label: string;
    href: string;
    calloutClass?: string;
    ico?: string;
    target?: string;
}
export interface MenuEntry {
    label: string;
    icon: string;
    items?: MenuSubEntry[];
    href?: string;
    calloutClass?: string;
    initialOpenState?: boolean;
    secondLabel?: boolean;
    secondTextLabel?: string;
    secondCalloutClass?: string;
}
export interface PanelProps {
    isDark: boolean;
    toggleTheme: (isDark: boolean) => void;
    cakePriceUsd?: number;
    currentLang: string;
    langs: LangType[];
    setLang: (lang: LangType) => void;
    links: Array<MenuEntry>;
}
export interface DealsEntry {
    dealName: string;
    dealDate: string;
    coupleFirst: string;
    coupleLast: string;
    dealValue: number;
}
export interface PanelFooterProps {
    footerTitle?: string;
    deals?: Array<DealsEntry>;
}
export interface NavProps extends PanelProps, PanelFooterProps, BSWPriceProps, ConnectMetaProps, FooterStatisticProps, FooterAboutLinks, FooterProductLinks, FooterServiceLinks {
    account?: string;
    login: Login;
    profile?: Profile;
    logout: () => void;
    pendingTransactions?: number;
    recentTransaction?: any;
    chainId?: any;
    clearTransaction?: any;
    isSwap?: boolean;
    transactionsForUIKit?: any;
    networkChangeToBSC?: any;
    networkChangeToMATIC?: any;
    currentNetwork?: any;
}
export interface FooterStatisticProps {
    footerStatistic: Array<FooterStatisticItem>;
}
export interface FooterStatisticItem {
    label: string;
    value: number;
}
export interface ConnectMetaProps {
    onClick: () => void;
}
export interface BSWPriceProps {
    BSWPriceLabel: string;
    BSWPriceValue: number;
}
export interface FooterAboutLinks {
    aboutLinks: Array<FooterNavItem>;
}
export interface FooterProductLinks {
    productLinks: Array<FooterNavItem>;
}
export interface FooterServiceLinks {
    serviceLinks: Array<FooterNavItem>;
}
export interface FooterNavItem {
    label: string;
    href: string;
    target?: string;
}
