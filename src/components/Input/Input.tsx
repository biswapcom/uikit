import styled, { DefaultTheme } from "styled-components";
import { InputProps, scales } from "./types";

interface StyledInputProps extends InputProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success
 */
const getBorderColor = ({ isSuccess = false, isWarning = false, theme }: StyledInputProps) => {
  if (isWarning) {
    return theme.colors.failure;
  }

  if (isSuccess) {
    return theme.colors.success;
  }

  return theme.colors.inputBorder;
};

const getHeight = ({ scale = scales.MD }: StyledInputProps) => {
  switch (scale) {
    case scales.SM:
      return "32px";
    case scales.LG:
      return "48px";
    case scales.MD:
    default:
      return "40px";
  }
};

const Input = styled.input<InputProps>`
  background-color: ${({ theme, isLight }) => ( isLight ? 'transparent' : theme.colors.input )};
  border-radius: 8px;
  border-color: ${getBorderColor};
  color: ${({ theme, isLight }) => ( isLight ? theme.colors.textSubtle : theme.colors.text )};
  border-width: ${({ isLight }) => ( isLight ? '0px' : '1px' )};
  border-style: solid;
  display: block;
  font-size: 12px;
  height: ${getHeight};
  outline: 0;
  padding: 0 16px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundDisabled};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

Input.defaultProps = {
  scale: scales.MD,
  isSuccess: false,
  isWarning: false,
  isLight: false,
};

export default Input;
