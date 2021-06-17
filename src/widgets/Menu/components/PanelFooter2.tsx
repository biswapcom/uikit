import React, { useEffect } from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import DealItem from "./DealItem";
import { PanelFooterProps } from "../types";

interface Props extends PanelFooterProps {
  isPushed: boolean;
  isDark: boolean;
}

const Wrapper = styled.div<Props>`
  padding: ${({ isPushed }) => (isPushed ? "32px 16px" : "32px 12px")};
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: ${({ isPushed }) => (isPushed ? "block" : "none")};
  }
`;

const Inner = styled.div`
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.dropDown};
  height: 143px;
  overflow: hidden;
`;

const PanelFooter2: React.FC<Props> = (props) => {
  const { isPushed, isDark, footerTitle, deals } = props;

  const testItem = (): JSX.Element => {
    if(deals) {
      return (
        <DealItem
          isDark={isDark}
          dealName={deals[0].dealName}
          dealDate={deals[0].dealDate}
          coupleFirst={deals[0].coupleFirst}
          coupleLast={deals[0].coupleLast}
          dealValue={deals[0].dealValue}
          animate
        />
      )
    }
    return (
      <div>hui</div>
    )
  }

  return (
    <Wrapper isPushed={isPushed} footerTitle={footerTitle} isDark={isDark} deals={deals}>
      <Inner>
        <Text color="contrast" small mb="12px">
          {footerTitle}
        </Text>

        {deals &&
          deals.map((item, index) => {
            return (
              <DealItem
                key={index.toString()}
                isDark={isDark}
                dealName={item.dealName}
                dealDate={item.dealDate}
                coupleFirst={item.coupleFirst}
                coupleLast={item.coupleLast}
                dealValue={item.dealValue}
                animate={false}
              />
            );
          })}
      </Inner>
    </Wrapper>
  );
};

export default PanelFooter2;
