import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter2 from "./PanelFooter2";
import Logo from "./Logo";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, PushedProps, PanelFooterProps } from "../types";

interface Props extends PanelProps, PushedProps, PanelFooterProps {
  showMenu: boolean;
  isMobile: boolean;
  href: string;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  padding-top: 34px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 30;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const Panel: React.FC<Props> = (props) => {
  // Find the home link if provided
  const { isPushed, showMenu, isDark, href, footerTitle, deals } = props;

  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <Logo isPushed={isPushed} isDark={isDark} href={href} />
      <PanelBody {...props} />
      {deals?.length && footerTitle && (
        <PanelFooter2 isPushed={isPushed} footerTitle={footerTitle} isDark={isDark} deals={deals} />
      )}
    </StyledPanel>
  );
};

export default Panel;
