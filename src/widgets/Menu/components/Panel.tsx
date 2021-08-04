import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter2 from "./PanelFooter2";
import NavSocial from "./NavSocial";
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

const PanelWrapper = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  padding-top: 64px;
  left: 0;
  top: 0;
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: -webkit-fill-available;
  z-index: 30;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transition: padding-top 0.2s, width 0.2s;

  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
  
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 0;
    overflow: visible;
    height: 100vh;
  }
  
  ${({ theme }) => theme.mediaQueries.lg} {
    &:hover .menuBtnDesktop {
      opacity: 1;
    }
  }
`

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: absolute;
  top: 64px;
  left: 0;
  height: calc(100% - 64px);
  flex-grow: 1;
  padding-top: 16px;
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  transition: padding-top 0.2s, width 0.2s;

  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    border-right: 2px solid rgba(133, 133, 133, 0.1);
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 17px;
    top: 0;
    height: 100%;
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
  const { isPushed, showMenu, isDark, href, footerTitle, deals, togglePush,dealsForUIKit,showDeals } = props;

  return (
    <PanelWrapper isPushed={isPushed} showMenu={showMenu}>
      <StyledPanel isPushed={isPushed} showMenu={showMenu}>
        <MenuBtnDesktop className="menuBtnDesktop" isPushed={isPushed} onClick={togglePush}>
          <ArrowSidebar width="16px" color="contrast" />
        </MenuBtnDesktop>
        <Logo isPushed={isPushed} isDark={isDark} href={href} />
        <PanelBody {...props} />
        {deals && deals?.length && footerTitle && (
          <PanelFooter2 isPushed={isPushed} showDeals={showDeals} dealsForUIKit={dealsForUIKit} />
        )}
        <NavSocial isPushed={isPushed} isSidebar/>

      </StyledPanel>
    </PanelWrapper>
  );
};

export default Panel;
