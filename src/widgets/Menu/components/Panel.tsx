import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter2 from "./PanelFooter2";
import Logo from "./Logo";
import { ArrowSidebar } from "../icons";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, PushedProps, PanelFooterProps } from "../types";

interface Props extends PanelProps, PushedProps, PanelFooterProps {
  showMenu: boolean;
  isMobile: boolean;
  href: string;
  togglePush: () => void;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  padding-top: 16px;
  top: 64px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: calc(100vh - 64px);
  transition: padding-top 0.2s, width 0.2s;
  border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  z-index: 30;
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 17px;
    top: 0;
    overflow: visible;
    height: 100vh;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    &:hover .menuBtnDesktop {
      opacity: 1;
    }
  }
`;

const MenuBtnDesktop = styled.div<{ isPushed: boolean }>`
  display: none;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.dropDown};
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: -12px;
  transform: ${({ isPushed }) => (isPushed ? "scale(1, 1)" : "scale(-1, 1)")};

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    opacity: ${({ isPushed }) => (isPushed ? '0' : '1')};
    transition: opacity 0.3s ease;
  }
`;

const Panel: React.FC<Props> = (props) => {
  // Find the home link if provided
  const { isPushed, showMenu, isDark, href, footerTitle, deals, togglePush } = props;

  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <MenuBtnDesktop className="menuBtnDesktop" isPushed={isPushed} onClick={togglePush}>
        <ArrowSidebar width="16px" color="contrast" />
      </MenuBtnDesktop>
      <Logo isPushed={isPushed} isDark={isDark} href={href} />
      <PanelBody {...props} />
      {deals?.length && footerTitle && (
        <PanelFooter2 isPushed={isPushed} footerTitle={footerTitle} isDark={isDark} deals={deals} />
      )}
    </StyledPanel>
  );
};

export default Panel;
