import React, { useState } from "react";
import styled from "styled-components";
import { socials } from "../../config";
import { SvgProps } from "../../../../components/Svg";
import Link from "../../../../components/Link/Link";
import * as IconModule from "../../icons";
import LogoChanel from "../../../../components/Svg/Icons/Logo";
import { useDetectClickOutside } from "react-detect-click-outside";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Wrapper = styled.div`
  grid-area: community;
  margin-top: 8px;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 24px;
  }
  
  ${({ theme }) => theme.mediaQueries.xll} {
    margin-top: 0;
  }
`

const Title = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.contrast};
  margin-bottom: 16px;
`

const SocialWrap = styled.div`
  display: flex;
  margin: 0 -4px;
`

const SocialItem = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 4px;
  transition: opacity .3s ease;
  
  &:hover {
    opacity: .65;
  }
`

const DropDownWrap = styled.div`
  position: relative;
`;

const DropDown = styled.div`
  display: none;
  position: absolute;
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.dropDown};
  bottom: 32px;
  left: 100%;
  transform: translateX(-40%);

  &:before {
    display: block;
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    bottom: -4px;
    left: 22px;
    transform: translateX(-50%) rotate(45deg);
    background-color: ${({ theme }) => theme.colors.dropDown};
  }

  &.active {
    display: block;
  }
`;

const DropDownLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.text};
  user-select: none;
  transition: all 0.4s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.contrast};
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const DropDownLabel = styled.span`
  display: block;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`

const Community: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openDropdown = () => {
    setIsOpen(() => !isOpen);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  return (
    <Wrapper>
      <Title>Community</Title>

      <SocialWrap>
        {socials.map((social) => {
          const Icon = Icons[social.icon];
          const iconProps = { width: "20px", color: "textSubtle", style: { cursor: "pointer" } };
          if (social.items) {
            return (
              <DropDownWrap key={social.label} ref={ref}>
                <SocialItem className={`${isOpen && "active"}`} onClick={openDropdown}>
                  <Icon {...iconProps} />
                </SocialItem>
                {isOpen && (
                  <DropDown className={`${isOpen && "active"}`}>
                    <DropDownLink key={social.items.channel.label} href={social.items.channel.href} aria-label={social.label}>
                      <LogoChanel  width="14px" mr="8px"/>
                      {social.items.channel.label}
                    </DropDownLink>
                    <DropDownLabel>Chats:</DropDownLabel>
                    {social.items.chats.map((item) => {
                      const IconFlag = Icons[item.icon];
                      return (
                        <DropDownLink key={item.label} href={item.href} aria-label={social.label}>
                          <IconFlag width="14px" mr="8px"/>
                          {item.label}
                        </DropDownLink>
                      );
                    })}
                  </DropDown>
                )}
              </DropDownWrap>
            )
          }
          return (
            <SocialItem key={social.label}>
              <Link external href={social.href} aria-label={social.label}>
                <Icon {...iconProps} />
              </Link>
            </SocialItem>
          )
        })}
      </SocialWrap>
    </Wrapper>
  )
}

export default Community;