import styled from "styled-components";
import { OverlayProps } from "./types";

const Overlay = styled.div.attrs({ role: "presentation" })<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(10, 22, 43);
  transition: opacity 0.4s;
  opacity: ${({ show }) => (show ? 0.55 : 0)};
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: ${({ show }) => (show ? "initial" : "none")};
`;

Overlay.defaultProps = {
  show: false,
  zIndex: 10,
};

export default Overlay;
