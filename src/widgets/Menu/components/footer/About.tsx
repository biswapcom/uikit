import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FooterAboutLinks } from '../../types'
import MenuLink from "../MenuLink";

const Wrapper = styled.div`
  grid-area: about;
`

const TopAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

const Title = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.contrast};
`

const ActionIcon = styled.div<{ isOpen: boolean }>`
  width: 14px;
  height: 14px;
  position: relative;
  display: block;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }
  
  &:before,
  &:after {
    display: block;
    content: "";
    width: 14px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.contrast};
    position: absolute;
    left: 50%;
    top: 50%;
    transition: transform 0.3s ease;
  }
  
  &:before {
    transform: ${({ isOpen }) => isOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(90deg)'};
  }
  
  &:after {
    transform: ${({ isOpen }) => isOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(0deg)'};
  }
`

const NavList = styled.div<{ isOpen: boolean, innerHeight: number }>`
  overflow: hidden;
  transform: ${({ isOpen }) => isOpen ? 'scaleY(1)' : 'scaleY(0)'};
  transform-origin: top;
  height: ${({ isOpen, innerHeight }) => isOpen ? `${innerHeight + 16}px` : '0'};
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  transition: transform .3s ease, opacity .3s ease, height .3s ease;
  padding-bottom: ${({ isOpen }) => isOpen ? '16px' : '0'};

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-bottom: 0;
    height: auto;
    opacity: 1;
    transform: scaleY(1);
  }
`

const NavItem = styled.div`
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSubtle};
  line-height: 18px;
`

const About: React.FC<FooterAboutLinks> = ({ aboutLinks }) => {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ innerHeight, setInnerHeight ] = useState(0)
  const overlayEl = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if(overlayEl && overlayEl.current) {
      const node = overlayEl.current;
      setInnerHeight(() => (node.clientHeight))
    }
  },[innerHeight])

  return (
    <Wrapper>
      <TopAction onClick={() => setIsOpen(!isOpen)}>
        <Title>About Us</Title>
        <ActionIcon isOpen={isOpen}/>
      </TopAction>
      <NavList isOpen={isOpen} innerHeight={innerHeight}>
        <div ref={overlayEl}>
          {aboutLinks.map((item, index) => (
            <NavItem key={index.toString()}>
              <MenuLink href={item.href} target={item.target ? item.target : '_self'}>{item.label}</MenuLink>
            </NavItem>
          ))}
        </div>
      </NavList>
    </Wrapper>
  )
}

export default About;