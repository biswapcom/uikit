import styled, { DefaultTheme } from "styled-components";
import { space, typography } from "styled-system";
import getThemeValue from "../../util/getThemeValue";
import { TextProps } from "./types";

interface ThemedProps extends TextProps {
  theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

const getFontSize = ({ fontSize, small }: TextProps) => {
  return small ? "14px" : fontSize || "16px";
};

const Text = styled.span<TextProps>`
  display: block;
  color: ${getColor};
  font-size: ${getFontSize};
  vertical-align: middle;
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: ${({ lineHeight }) => lineHeight || "1.5"};
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${space}
  ${typography}
`;

Text.defaultProps = {
  color: "text",
  small: false,
};

export default Text;
