import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ChevronDown from "../../../components/Svg/Icons/ChevronDown";

export interface SelectProps {
  options: OptionProps[]
  onChange?: (option: OptionProps) => void
  currentNetwork?: number,
}

export interface OptionProps {
  label: string
  icon: JSX.Element
  value?: number
  bg: string
}

const Wrapper = styled.div`
  margin-right: 8px;
  position: relative;
`

const Top = styled.div<{ bg: string, isOpen: boolean }>`
  display: flex;
  align-items: center;
  width: 54px;
  height: 32px;
  padding: 0 6px;
  background-color: ${({ bg }) => bg};
  cursor: pointer;
  border-radius: ${({ isOpen }) => isOpen ? '8px 8px 0 0' : '8px'};
  color: ${({ theme }) => theme.colors.contrast};
  transition: border-radius .3s ease, background-color .3s ease, color .3s ease;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 150px;
    height: 40px;
    padding: 0 16px;
  }
  
  svg {
    fill: ${({ theme }) => theme.colors.contrast};
    width: 20px;
    margin-right: 4px;

    ${({ theme }) => theme.mediaQueries.sm} {
      width: 24px;
      margin-right: 8px;
    }
  }
  
  .arrow {
    transform: ${({ isOpen }) => isOpen ? 'scale(1, -1)' : 'scale(1, 1)'};
    transition: transform .3s ease;
    margin-right: 0;
  }
`

const TopLabel = styled.span`
  font-size: 14px;
  flex-grow: 1;
  font-weight: bold;
  display: none;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`

const DropDown = styled.div<{ isOpen: boolean }>`
  width: 100%;
  position: absolute;
  left: 0;
  top: 32px;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  transform: ${({ isOpen }) => isOpen ? 'scaleY(1)' : 'scaleY(0)'};
  transform-origin: top;
  height: ${({ isOpen }) => isOpen ? 'auto' : '0'};
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  transition: transform .3s ease, opacity .3s ease, height .3s ease;

  ${({ theme }) => theme.mediaQueries.sm} {
    top: 40px;
  }
`

const DropDownItem = styled.div<{ bg: string }>`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 6px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: background-color .3s ease;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 40px;
    padding: 0 16px;
  }
  
  &:hover {
    background-color: ${({ bg }) => bg};
    color: ${({ theme }) => theme.colors.contrast};
    
    svg {
      fill: ${({ theme }) => theme.colors.contrast};
    }
  }
  
  svg {
    width: 20px;
    margin-right: 0;
    transition: all .3s ease;

    ${({ theme }) => theme.mediaQueries.sm} {
      width: 24px;
      margin-right: 8px;
    }
  }
`

const ItemLabel = styled.span`
  display: none;
  font-size: 14px;
  flex-grow: 1;
  font-weight: bold;
  transition: color .3s ease;

  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`

const NetworkSwitcher: React.FC<SelectProps> = ({ options, onChange, currentNetwork }) => {

  const containerRef = useRef(null)
  const dropdownRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0])

  const toggling = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log('network-changed - ', currentNetwork);
    if(currentNetwork === 56) {
      setSelectedOption(options[1])
    }
    if(currentNetwork === 137) {
      setSelectedOption(options[0])
    }
  }, [options, currentNetwork]);

  const onOptionClicked = (option: OptionProps) => () => {
    setIsOpen(false)

    if (onChange) {
      onChange(option)
    }
  }

  return (
    <Wrapper ref={containerRef}>
      <Top bg={selectedOption.bg} onClick={toggling} isOpen={isOpen}>
        {selectedOption.icon}
        <TopLabel>{selectedOption.label}</TopLabel>
        <ChevronDown width="24px" color="contrast" className="arrow"/>
      </Top>
      <DropDown ref={dropdownRef} isOpen={isOpen}>
        {options.map((option) =>
          option.label !== selectedOption.label ? (
            <DropDownItem onClick={onOptionClicked(option)} key={option.label} bg={option.bg}>
              {option.icon}
              <ItemLabel>{option.label}</ItemLabel>
            </DropDownItem>
          ) : null,
        )}
      </DropDown>
    </Wrapper>
  )
}

export default NetworkSwitcher;