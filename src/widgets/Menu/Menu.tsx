import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import TogglePanel from "./components/TogglePanel";
import Panel from "./components/Panel";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
import Footer from "./components/Footer";
import { MENU_HEIGHT, MENU_HEIGHT_MOBILE, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  
  
  &.no-scroll {
    height: calc(100vh - 2rem);
    max-height: calc(100vh - 2rem);
    overflow: hidden;
    
    ${({ theme }) => theme.mediaQueries.lg} {
      height: auto;
      max-height: none;
      overflow: initial;
    }
  }
`;

const StyledNav = styled.nav<{ showMenu: boolean; isPushed: boolean; menuBg: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT_MOBILE}px`)};
  left: 0;
  transition: top 0.4s, padding-left 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT_MOBILE}px;
  background-color: ${({ theme, menuBg }) => (menuBg ? "transparent" : theme.colors.background)};
  z-index: 20;
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    padding-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL + 8 : SIDEBAR_WIDTH_REDUCED + 8}px`};
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    height: ${MENU_HEIGHT}px;
    top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  }
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 30;
  min-height: calc(100vh - 2rem);
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding-top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  transition: padding-top 0.4s;
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: calc(100% - 64px);
  top: 64px;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 100%;
    top: 0;
  }
`;

const Menu: React.FC<NavProps> = ({
                                    account,
                                    login,
                                    logout,
                                    isDark,
                                    toggleTheme,
                                    langs,
                                    setLang,
                                    currentLang,
                                    cakePriceUsd,
                                    links,
                                    profile,
                                    children,
                                    footerTitle,
                                    deals,
                                    BSWPriceLabel,
                                    BSWPriceValue,
                                    supply,
                                    total
                                  }) => {
  const { isLg, isMd, isSm, isXs } = useMatchBreakpoints();
  const isMobile = isLg || isMd || isSm || isXs;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const [menuBg, setMenuBg] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
        setMenuBg(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
          setMenuBg(false);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);
    window.addEventListener("scroll", throttledHandleScroll);

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper className={`${ isPushed ? 'no-scroll' : '' }`}>
      <BodyWrapper>
        <StyledNav showMenu={showMenu} isPushed={isPushed} menuBg={menuBg}>
          <TogglePanel
            isPushed={isPushed}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            isDark={isDark}
          />
          <Flex>
            <UserBlock account={account} login={login} logout={logout} />
            {/* {profile && <Avatar profile={profile} />} */}
          </Flex>
        </StyledNav>
        <Panel
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
          href={homeLink?.href ?? "/"}
          footerTitle={footerTitle}
          deals={deals}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          <div>
            {children}
          </div>

          <Footer
            BSWPriceLabel={BSWPriceLabel}
            BSWPriceValue={BSWPriceValue}
            supply={supply}
            total={total}
            isPushed={isPushed}
          />
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
