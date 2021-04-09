import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import { SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_REDUCED } from "../config";
import ConnectMetamask from "./ConnectMetamask";
import { TextProps } from "../../../components/Text";
import BSWPrice from "./BSWPrice";
import SupplyInfo from "./SupplyInfo";
import TotalInfo from "./TotalInfo";
import { BSWPriceProps, FooterSupplyProps, FooterTotalProps } from "../types";

interface Props extends BSWPriceProps, FooterSupplyProps, FooterTotalProps {
  isPushed: boolean
}

const Wrapper = styled.footer<{ isPushed: boolean }>`
  color: #fff;
  background: ${({ theme }) => theme.colors.footer};
  padding: 32px 0;
  transition: padding-left .2s;

  ${({ theme }) => theme.mediaQueries.nav} {
    padding-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const GridRow =styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
`;

const Row = styled.div<TextProps>`
  display: flex;
  ${space}
`;

const Footer: React.FC<Props> = ({isPushed, BSWPriceLabel, BSWPriceValue, supply, total}) => {
  return (
    <Wrapper isPushed={isPushed}>
      <GridRow>
        <BSWPrice BSWPriceLabel={BSWPriceLabel} BSWPriceValue={BSWPriceValue} />
        <SupplyInfo supply={supply} />
        <TotalInfo total={total} />
      </GridRow>
      <Row mt="8px">
        <ConnectMetamask href="/"/>
      </Row>
    </Wrapper>
  )
}

export default Footer;
