import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import DealItem from "./DealItem";
import { PanelFooterProps } from "../types";

interface Props extends PanelFooterProps {
  isPushed: boolean;
  isDark: boolean;
}

const Wrapper = styled.div<Props>`
  padding: ${({ isPushed }) => (isPushed ? "0 16px 32px" : "0 12px 32px")};
  display: ${({ isPushed }) => (isPushed ? "block" : "none")};
`;

const Inner = styled.div`
  padding: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.dropDown};
`;

const PanelFooter2: React.FC<Props> = (props) => {
  const { isPushed, isDark, footerTitle, deals } = props;
  return (
    <Wrapper isPushed={isPushed} footerTitle={footerTitle} isDark={isDark} deals={deals}>
      <Inner>
        <Text color="contrast" small mb="12px">{footerTitle}</Text>

        {deals.map((item) => {
          return (
            <DealItem
              isDark={isDark}
              dealName={item.dealName}
              dealDate={item.dealDate}
              coupleFirst={item.coupleFirst}
              coupleLast={item.coupleLast}
              dealValue={item.dealValue}
            />
          )
        })}
      </Inner>
    </Wrapper>
  )
};

export default PanelFooter2;
