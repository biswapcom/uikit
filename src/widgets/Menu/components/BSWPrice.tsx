import React from "react";
import styled from "styled-components";
import { LogoIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import { BSWPriceProps } from "../types";
import { formatSpacingAmount } from "../../../util/formatSpacingAmount";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 38px;
  grid-template-areas:
    "logo bsw-title"
    "logo bsw-value";
  margin-bottom: 8px;
  padding-right: 24px;
  position: relative;
  grid-area: price;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-bottom: 18px;
  }
  
  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 0;
    max-width: 180px;
  }

  &:before {
    display: none;
    content: "";
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.dropDown};
    position: absolute;
    right: 24px;
    top: 0;

    ${({ theme }) => theme.mediaQueries.sm} {
      display: block;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      display: none;
    }
  }

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

  .logo {
    width: 38px;
    grid-area: logo;
  }
`;

const BSWPrice: React.FC<BSWPriceProps> = ({ BSWPriceLabel, BSWPriceValue }) => {
  return (
    <Wrapper>
      <LogoIcon className="logo" />
      <Text color="text" fontSize="12px" lineHeight="18px" ml={16}>
        {BSWPriceLabel}
      </Text>
      <Text color="contrast" fontSize="16px" lineHeight="19px" ml={16} bold>
        ${formatSpacingAmount(BSWPriceValue)}
      </Text>
    </Wrapper>
  );
};

export default BSWPrice;
