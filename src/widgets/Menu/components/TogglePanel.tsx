import React from "react";
import Flex from "../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";
import NavSocial from "./NavSocial";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
}

const Logo: React.FC<Props> = ({ isPushed, togglePush }) => {
  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>

      <NavSocial />
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
