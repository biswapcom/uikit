import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { FooterSupplyProps } from "../types";

const Wrapper = styled.div`
  display: block;
  margin-bottom: 18px;
  position: relative;
  grid-area: supply;

  &:after {
    display: none;
    content: "";
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.dropDown};
    position: absolute;
    bottom: -18px;
    left: 0;

    ${({ theme }) => theme.mediaQueries.sm} {
      display: block;
    }
    
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const SupplyInfo: React.FC<FooterSupplyProps> = ({ supply }) => {
  return (
    <Wrapper>
      {supply.map((item, index) => {
        return (
          <Row key={index.toString()}>
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
