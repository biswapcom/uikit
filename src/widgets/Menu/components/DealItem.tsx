import React from "react";
import styled from "styled-components";
import SwapArrow from "../icons/SwapArrow";
import Text from "../../../components/Text/Text";
import Exchange from "../icons/Exchange";
import { TradeIcon } from "../icons";
import { formatSpacingAmount } from "../../../util/formatSpacingAmount";

interface Props {
  isDark: boolean;
  dealName: string;
  dealDate: string;
  coupleFirst: string;
  coupleLast: string;
  dealValue: number;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  min-width: 24px;
  height: 24px;
  margin-right: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.success};

  .swapArrow {
    width: 12px;
    height: auto;
  }
`;

const Info = styled.div`
  flex-grow: 1;
`;

const CoupleWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 5px;
`;

const DealItem: React.FC<Props> = (props) => {
  const { dealName, dealDate, coupleFirst, coupleLast, dealValue } = props;
  return (
    <Wrapper>
      <Icon>
        <TradeIcon width="16px" color="contrast" />
      </Icon>
      <Info>
        <Text color="contrast" fontSize="10px" bold>
          {dealName}
        </Text>
        <Text color="textSubtle" fontSize="8px">
          {dealDate}
        </Text>
      </Info>
      <div>
        <CoupleWrap>
          <Text color="contrast" fontSize="8px" lineHeight="1" textTransform="uppercase">
            {coupleFirst}
          </Text>
          <Text color="contrast" fontSize="8px" lineHeight="1" textTransform="uppercase">
            /
          </Text>
          <Text color="textSubtle" fontSize="8px" lineHeight="1" textTransform="uppercase">
            {coupleLast}
          </Text>
        </CoupleWrap>
        {dealValue && (
          <Text color="success" fontSize="12px">
            ${formatSpacingAmount(dealValue)}
          </Text>
        )}
      </div>
    </Wrapper>
  );
};

export default DealItem;
