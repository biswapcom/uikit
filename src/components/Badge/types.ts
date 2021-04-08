import { TypographyProps } from "styled-system";

export interface BadgeProps extends TypographyProps {
  title?: string,
  color?: string,
  background?: string,
  fontSize?: string,
  bold?: boolean,
  small?: boolean,
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}
