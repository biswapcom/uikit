import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

// const rainbowAnimation = keyframes`
//   0%,
//   100% {
//     background-position: 0 0;
//   }
//   50% {
//     background-position: 100% 0;
//   }
// `;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  color: ${({ isPushed }) => (isPushed ? "inherit" : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;

  &:hover {
    color: ${({ isPushed, theme }) => (isPushed ? theme.colors.textSubtle : "transparent")};
  }
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 24px 0 44px" : "0 12px")};
  font-size: ${({ secondary }) => (secondary ? "12px" : "14px")};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.contrast};
  border-radius: 8px;
  // box-shadow: ${({ isActive, theme }) => (isActive ? `inset 4px 0px 0px ${theme.colors.primary}` : "none")};

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
    color: ${({ theme }) => theme.colors.textSubtle};

    svg {
      fill: ${({ theme }) => theme.colors.textSubtle};
    }
  }

  // Safari fix
  flex-shrink: 0;

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

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);
export { MenuEntry, LinkLabelMemo as LinkLabel };
