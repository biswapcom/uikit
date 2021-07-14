import React from "react";
import styled from "styled-components";
import { MetamaskIcon } from "../../../../components/Svg";
import Link from "../../../../components/Text/Text";
import Button from "../../../../components/Button/Button";

interface Props {
  onClick: () => void;
}

const Label = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.contrast};
  margin-right: 4px;
  font-weight: 400;
`;

const ConnectMetamask: React.FC<Props> = (props) => {
  const { onClick } = props;

  return (
    <Button scale="sm" variant="primary" width="100%" maxWidth="140px" onClick={() => onClick()} as="button">
      <Label>
        Add BSW to
      </Label>
      <MetamaskIcon width="22px"/>
    </Button>
  );
};

export default ConnectMetamask;
