import styled, { DefaultTheme } from "styled-components";
import { Variant, variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variant;
  theme: DefaultTheme;
  autoWidth?: boolean;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "tertiary" : "card"];
};

const StyledButtonMenu = styled.div<{ variant: Variant, autoWidth: boolean }>`
  background-color: ${getBackgroundColor};
  border-radius: 8px;
  display: ${({ autoWidth }) => autoWidth? 'flex' : 'inline-flex'};

  & > button,
  & > a {
    ${({ autoWidth }) => autoWidth && 'flex: 1 1 auto;'}
  }
  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
