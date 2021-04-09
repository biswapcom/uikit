import React from "react";
import styled from "styled-components";
import { MetamaskIcon } from "../../../components/Svg";
import Link from "../../../components/Text/Text";

interface Props {
  href: string;
}
const Wrapper = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const ConnectMetamask: React.FC<Props> = (props) => {
  const { href } = props;

  return (
    <Wrapper>
      <MetamaskIcon width="24px" mx="7px" />
      <StyledLink ml={16} as="a" color="primary" href={href} aria-label="Add to Metamask">
        Add to Metamask
      </StyledLink>
    </Wrapper>
  );
};

export default ConnectMetamask;