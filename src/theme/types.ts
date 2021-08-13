export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xll: string;
  xxl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
  cardHeader: string;
  cardBlue: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  header: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  contrast: string;
  invertedContrast: string;
  input: string;
  inputBorder: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  text: string;
  disabled: string;
  textDisabled: string;
  textSubtle: string;
  borderColor: string;
  card: string;
  dropDown: string;
  footer: string;
  boost: string;

  // Gradients
  gradients: Gradients;

  // Brand colors
  binance: string;
  polygon: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
