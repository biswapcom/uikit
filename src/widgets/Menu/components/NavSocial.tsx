import React, { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import styled from "styled-components";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";
import { SvgProps } from "../../../components/Svg";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Wrapper = styled.div`
  display: none;
  align-items: center;
  
  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
  }
`;

const DropDownWrap = styled.div`
  position: relative;
`

const DropDown = styled.div`
  display: none;
  position: absolute;
  border-radius: 8px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.dropDown};
  top: 52px;
  left: 50%;
  transform: translateX(-50%);
  
  &:before {
    display: block;
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    background-color: ${({ theme }) => theme.colors.dropDown};
  }
  
  &.active {
    display: block;
  }
`

const DropDownLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 24px;
  padding: 0 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  user-select: none;
  transition: all .4s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.textDisabled};
    color: ${({ theme }) => theme.colors.contrast};
  }
  
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-radius: 8px;
  margin-right: 8px;
  transition: all 0.2s;

  &:hover,
  &.active {
    background-color: ${({ theme }) => theme.colors.dropDown};
  }
`;

const NavSocial: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openDropdown = () => {
    setIsOpen(() => !isOpen);
  }
  const closeDropdown = () => {
    setIsOpen(false);
  }
  const ref = useDetectClickOutside({ onTriggered: closeDropdown });

  return (
    <Wrapper>
      {socials.map((social) => {
        const Icon = Icons[social.icon];
        const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };

        if(social.items) {
          return (
            <DropDownWrap ref={ref}>
              <ItemWrapper className={`${isOpen && 'active'}`} onClick={openDropdown}>
                <Icon {...iconProps} />
              </ItemWrapper>
              {isOpen &&
                <DropDown className={`${isOpen && 'active'}`}>
                  {social.items.map((item) => {
                    return (
                      <DropDownLink key={item.label} href={item.href} aria-label={social.label}>
                        {item.label}
                      </DropDownLink>
                    )
                  })}
                </DropDown>
              }
            </DropDownWrap>
          )
        }

        return (
          <ItemWrapper>
            <Link external key={social.label} href={social.href} aria-label={social.label}>
              <Icon {...iconProps} />
            </Link>
          </ItemWrapper>
        );
      })}
    </Wrapper>
  )
};

export default NavSocial;
