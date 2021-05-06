import React from "react";
import styled from "styled-components";
import { HamburgerIcon } from "../icons";
import { LogoIcon } from "../../../components/Svg";
import MenuButton from "./MenuButton";
import NavSocial from "./NavSocial";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
}

const Wrapper = styled.div`
  display: flex;
  padding-left: 8px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 40px;
  }
`;

const HeaderMobileLogo = styled.div`
  align-self: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`;

const Logo: React.FC<Props> = ({ togglePush }) => {
  return (
    <Wrapper>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        <HamburgerIcon width="24px" color="textSubtle" />
      </MenuButton>
      <HeaderMobileLogo>
        <LogoIcon width="32px" />
      </HeaderMobileLogo>
      <NavSocial />
    </Wrapper>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
