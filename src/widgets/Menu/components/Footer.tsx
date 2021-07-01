import React from "react";
import styled from "styled-components";
import {animateScroll as scroll} from 'react-scroll'
import { SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_REDUCED } from "../config";
import ConnectMetamask from "./ConnectMetamask";
import BSWPrice from "./BSWPrice";
import SupplyInfo from "./SupplyInfo";
import TotalInfo from "./TotalInfo";
import { BSWPriceProps, FooterSupplyProps, FooterTotalProps } from "../types";
import { Button } from "../../../components/Button";
import ArrowUp from "../../../components/Svg/Icons/ArrowUp";

interface Props extends BSWPriceProps, FooterSupplyProps, FooterTotalProps {
  isPushed: boolean;
  onClick: () => void;
}

const Wrapper = styled.footer<{ isPushed: boolean }>`
  color: #fff;
  background: ${({ theme }) => theme.colors.footer};
  padding: 32px 16px;
  transition: padding-left 0.2s;

  ${({ theme }) => theme.mediaQueries.nav} {
    // padding-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns:
    minmax(150px, 1fr)
    minmax(150px, 1fr);
  grid-row-gap: 8px;
  max-width: 1152px;
  margin: 0 auto;
  grid-template-areas: 
    'price supply'
    'connect total';

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-areas: 
    'price supply'
    'connect total';
  }
  
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns:
      minmax(200px, 1fr)
      minmax(200px, 1fr)
      minmax(160px, 1fr);
      
    grid-template-areas: 'price connect supply total btnUp';
  }

  ${({ theme }) => theme.mediaQueries.xxl} {
    grid-template-columns:
      minmax(200px, 1fr)
      minmax(200px, 1fr)
      minmax(160px, 1fr)
      minmax(150px, 1fr)
      48px;
  }
`;

const BtnUp = styled(Button)`
  grid-area: btnUp;
  display: none;

  ${({ theme }) => theme.mediaQueries.xll} {
    display: inline-flex;
    margin-left: 12px;
  }
`

const Footer: React.FC<Props> = ({ isPushed, BSWPriceLabel, BSWPriceValue, supply, total, onClick }) => {
  return (
    <Wrapper isPushed={isPushed}>
      <GridRow>
        <BSWPrice BSWPriceLabel={BSWPriceLabel} BSWPriceValue={BSWPriceValue} />
        <ConnectMetamask onClick={onClick}/>
        <SupplyInfo supply={supply} />
        <TotalInfo total={total} />
        <BtnUp onClick={()=> scroll.scrollToTop()}><ArrowUp color='white'/></BtnUp>
      </GridRow>
    </Wrapper>
  );
};

export default Footer;
