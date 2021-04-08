import styled,{DefaultTheme} from "styled-components";

import {BadgeProps} from './types'
import getThemeValue from "../../util/getThemeValue";

interface ThemedProps extends BadgeProps {
  theme: DefaultTheme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(`colors.${color}`, color)(theme);
};

const getBackgroundColor = ({background, theme}: ThemedProps) => {
  return getThemeValue(`colors.${background}`, background)(theme);
}

const getFontSize = ({ fontSize, small }: BadgeProps) => {
  return small ? "8px" : fontSize || "10px";
};

const StyledBadge = styled.div<BadgeProps>`
  color:${getColor};
  background-color: ${getBackgroundColor};
  font-size: ${getFontSize};
  border-radius: 16px;
  width: 49px;
  padding: 4px 12px;
  text-align: center;
`

export default StyledBadge;