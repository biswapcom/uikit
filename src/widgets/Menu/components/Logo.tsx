import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../components/Svg";
import { LogoIcon as LogoWithText } from "../icons";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  .mobile-icon {
    width: 38px;
    // ${({ theme }) => theme.mediaQueries.nav} {
    //   display: none;
    // }
  }
  .desktop-icon {
    width: 121px;
    display: block;
    margin-left: 8px;
    // ${({ theme }) => theme.mediaQueries.nav} {
    //   display: block;
    // }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
    <>
      {isPushed ? (
        <>
          <LogoIcon className="mobile-icon" />
          <LogoWithText className="desktop-icon" isDark={isDark} />
        </>
      ) : (
        <LogoIcon className="mobile-icon" />
      )}
    </>
  );

  return (
    <div>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </div>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
