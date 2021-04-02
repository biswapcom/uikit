import React from "react";
import styled from "styled-components";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";

interface Props {
  isPushed: boolean;
}

const Wrapper = styled.footer<{ isPushed: boolean }>`
  padding-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  color: #fff;
  background: ${({ theme }) => theme.colors.footer};
`;
const Footer: React.FC<Props> = (props) => {
  const { isPushed } = props;
  return <Wrapper isPushed={isPushed}>s</Wrapper>;
};

export default Footer;
