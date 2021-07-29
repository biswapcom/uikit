import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";
import { Text } from "../../../components/Text";
import { Colors } from "../../../theme/types";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
  isSmall?: boolean;
}

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: ${({ isPushed }) => (isPushed ? "inherit" : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 24px 0 44px" : "0 12px")};
  font-size: ${({ secondary }) => (secondary ? "12px" : "14px")};
  color: ${({ theme, isSmall, isActive }) => ( isSmall && !isActive ? theme.colors.text : theme.colors.contrast )};
  border-radius: 8px;
  background: ${({ isActive, theme, isSmall }) => (isActive && !isSmall ? theme.colors.dropDown : "transparent")};
  height: ${({ isSmall }) => isSmall ? '32px' : '48px'};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ theme }) => theme.colors.contrast};
    transition: fill 0.4s;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.textSubtle} !important;

    svg {
      fill: ${({ theme }) => theme.colors.textSubtle} !important;
    }
  }

  // Safari fix
  flex-shrink: 0;

  &.warning {
    color: ${({ theme }) => theme.colors.warning};

    svg {
      fill: ${({ theme }) => theme.colors.warning};
    }
  }

  &.rainbow {
    background: ${({ theme }) => theme.colors.dropDown};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkStatus = styled(Text)<{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.default};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 8px;
`;



const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);
export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };
