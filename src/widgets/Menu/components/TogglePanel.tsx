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

const HeaderMobileLogo = styled.a`
  align-self: center;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 0;
    opacity: 0;
  }
`;

const Logo: React.FC<Props> = ({ togglePush }) => {
  return (
    <Wrapper>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        <HamburgerIcon width="24px" color="textSubtle" />
      </MenuButton>
      <HeaderMobileLogo href="/">
        <svg width="32px" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.0769 54.1537C42.031 54.1537 54.1538 42.031 54.1538 27.0769C54.1538 12.1227 42.031 0 27.0769 0C12.1227 0 0 12.1227 0 27.0769C0 42.031 12.1227 54.1537 27.0769 54.1537Z" fill="white"/>
          <path d="M48.0498 10.187C46.1719 10.5582 44.3814 11.0823 42.9074 11.4098C39.5446 12.1632 36.4002 14.7399 35.7124 19.4565C35.101 23.6709 36.5203 25.4833 35.898 30.3855C34.8062 38.9453 26.5958 41.8931 22.7635 43.6837C20.5471 44.71 15.1645 47.0683 11.0156 48.8698C15.5139 52.1889 21.0603 54.1542 27.0762 54.1542C42.034 54.1542 54.1531 42.0351 54.1531 27.0773C54.1531 20.7011 51.9476 14.8381 48.2573 10.2198C48.1918 10.2088 48.1263 10.1979 48.0498 10.187Z" fill="url(#paint0_linear)"/>
          <path d="M24.0307 23.1027C26.1161 18.5935 25.3628 18.5826 26.9459 14.3464C28.9439 8.97467 35.1563 10.5032 36.8704 10.7325C39.6982 11.1146 40.4407 10.1102 46.4019 9.14936C46.6967 9.10569 46.9806 9.06202 47.2645 9.02926C42.3076 3.49379 35.1017 0 27.0769 0C16.3007 0 6.9985 6.28882 2.64218 15.4054C11.5732 17.6218 21.2139 22.4367 24.0307 23.1027ZM18.1131 4.71662C18.8992 4.83671 22.7206 9.58608 23.4412 21.7816C23.4412 21.7816 18.528 20.6024 17.469 18.0694C16.5955 15.9841 17.731 13.2436 18.1131 4.71662ZM48.2143 10.1647C48.2253 10.1866 48.2471 10.1975 48.258 10.2193C48.1925 10.2084 48.1161 10.2084 48.0506 10.1975C48.1052 10.1757 48.1598 10.1757 48.2143 10.1647ZM0 27.0769C0 24.9151 0.251116 22.8188 0.731513 20.8099C1.71414 21.6287 2.76228 22.5349 3.87593 23.5722C10.929 30.1121 22.4039 35.2764 26.5856 30.4724C26.5965 30.4833 26.6074 30.4833 26.6074 30.4942C25.8431 31.4987 22.928 34.6759 17.3598 33.6932L8.55979 46.8277C3.29727 41.8927 0 34.8724 0 27.0769Z" fill="url(#paint1_linear)"/>
          <defs>
            <linearGradient id="paint0_linear" x1="43.3371" y1="17.2788" x2="36.9491" y2="52.4708" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF496A"/>
              <stop offset="1" stopColor="#E42648"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="13.0692" y1="39.8859" x2="27.193" y2="-1.0612e-05" gradientUnits="userSpaceOnUse">
              <stop offset="0.00181229" stopColor="#1158F1"/>
              <stop offset="1" stopColor="#119BED"/>
            </linearGradient>
          </defs>
        </svg>
      </HeaderMobileLogo>
      <NavSocial />
    </Wrapper>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
