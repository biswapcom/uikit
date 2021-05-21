import styled from "styled-components";
import { scales } from "../Checkbox/types";
import { ToggleProps, InputProps, ScaleKeys } from "./types";

const scaleKeyValues = {
  sm: {
    handleHeight: "16px",
    handleWidth: "16px",
    handleLeft: "0",
    handleTop: "-3px",
    checkedLeft: "calc(100% - 16px)",
    toggleHeight: "10px",
    toggleWidth: "32px",
  },
  md: {
    handleHeight: "24px",
    handleWidth: "24px",
    handleLeft: "0",
    handleTop: "-4px",
    checkedLeft: "calc(100% - 24px)",
    toggleHeight: "16px",
    toggleWidth: "40px",
  },
};

const getScale = (property: ScaleKeys) => ({ scale = scales.MD }: ToggleProps) => {
  return scaleKeyValues[scale][property];
};

export const Handle = styled.div<ToggleProps>`
  background-color: ${({ theme, checked }) => (checked ? theme.colors.success : theme.toggle.handleBackground)};
  border-radius: 50%;
  cursor: pointer;
  height: ${getScale("handleHeight")};
  left: ${getScale("handleLeft")};
  position: absolute;
  top: ${getScale("handleTop")};
  transition: left 200ms ease-in;
  width: ${getScale("handleWidth")};
  z-index: 1;
`;

export const Input = styled.input<InputProps>`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: ${getScale("checkedLeft")};
  }
`;

const StyledToggle = styled.div<ToggleProps>`
  align-items: center;
  //background-color: ${({ theme, checked }) => theme.colors[checked ? "success" : "input"]};
  background-color: #E5EAF2;
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: ${getScale("toggleHeight")};
  position: relative;
  transition: background-color 200ms;
  width: ${getScale("toggleWidth")};
`;

export default StyledToggle;
