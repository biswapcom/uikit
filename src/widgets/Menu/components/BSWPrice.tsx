import React from "react";
import styled from "styled-components";
import { LogoIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import { BSWPriceProps } from "../types";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 38px;
  grid-template-areas: 
    "logo bsw-title"
    "logo bsw-value";
  
  .logo {
    width: 38px;
    grid-area: logo;
  }
`;

const BSWPrice: React.FC<BSWPriceProps> = ({BSWPriceLabel, BSWPriceValue}) => {
  return (
    <Wrapper>
      <LogoIcon className="logo" />
      <Text color="text" fontSize="12px" lineHeight="18px" ml={16}>
        {BSWPriceLabel}
      </Text>
      <Text color="contrast" fontSize="16px" lineHeight="19px" ml={16} bold>
        ${BSWPriceValue}
      </Text>
    </Wrapper>
  )
}

export default BSWPrice;