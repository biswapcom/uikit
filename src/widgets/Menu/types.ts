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
}

export interface MenuEntry {
  label: string;
  icon: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
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

export interface NavProps extends PanelProps, PanelFooterProps, BSWPriceProps, FooterSupplyProps, FooterTotalProps {
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
}

export interface BSWPriceProps {
  BSWPriceLabel: string;
  BSWPriceValue: number;
}

export interface SupplyInfo {
  label: string;
  value: number;
}

export interface TotalInfo {
  label: string;
  value: number;
}

export interface FooterSupplyProps {
  supply: Array<SupplyInfo>;
}

export interface FooterTotalProps {
  total: Array<TotalInfo>;
}
