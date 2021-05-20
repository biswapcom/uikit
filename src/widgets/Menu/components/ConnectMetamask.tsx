import React from "react";
import styled from "styled-components";
import { MetamaskIcon } from "../../../components/Svg";
import Link from "../../../components/Text/Text";

interface Props {
  onClick: () => void;
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  grid-area: connect;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 0;
  }
`;

const StyledLink = styled(Link)`
  border: 0;
  background: transparent;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ConnectMetamask: React.FC<Props> = (props) => {
  const { onClick } = props;

  return (
    <Wrapper>
      <MetamaskIcon width="24px" mx="7px" />
      <StyledLink ml={16} onClick={() => onClick()} as="button" fontSize="12px" color="primary" aria-label="Add to Metamask">
        Add BSW to Metamask
      </StyledLink>
    </Wrapper>
  );
};

export default ConnectMetamask;
