import React from "react";
import styled from "styled-components";
import { ArrowSidebar, HamburgerIcon, HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";
import NavSocial from "./NavSocial";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding-left: 40px;
`

const Logo: React.FC<Props> = ({ isPushed, togglePush }) => {
  return (
    <Wrapper>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <ArrowSidebar width="16px" color="contrast"/>
        )}
      </MenuButton>

      <NavSocial />
    </Wrapper>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
