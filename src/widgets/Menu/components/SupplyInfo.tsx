import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { FooterSupplyProps } from "../types";

const Wrapper = styled.div`
  display: block;
`;

const Row = styled.div`
  display: flex;
`;

const SupplyInfo: React.FC<FooterSupplyProps> = ({ supply }) => {
  return (
    <Wrapper>
      {supply.map((item) => {
        return (
          <Row>
            <Text color="text" fontSize="12px" lineHeight="18px">
              {item.label}
            </Text>
            <Text color="contrast" fontSize="12px" lineHeight="18px" ml="8px">
              {item.value} BSW
            </Text>
          </Row>
        );
      })}
    </Wrapper>
  );
};

export default SupplyInfo;
