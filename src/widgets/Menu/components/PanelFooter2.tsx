import React, { useEffect, useMemo, useState } from "react";
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
  const { isPushed, isDark, footerTitle,deals } = props;
  // const [deals,setDeals] = useState([
  //   {
  //     dealName: "Liquidity",
  //     dealDate: "18:34:00",
  //     coupleFirst: "BSW",
  //     coupleLast: "BNB",
  //     dealValue: 100987.77,
  //   },
  //   {
  //     dealName: "Liquidity",
  //     dealDate: "18:34:00",
  //     coupleFirst: "BSW",
  //     coupleLast: "BNB",
  //     dealValue: 100987.77,
  //   },
  // ]);

  // useEffect(()=> {
  //   function newData  () {
  //     setDeals(prevState => [{
  //       dealName: "Liquidity",
  //       dealDate: "18:34:00",
  //       coupleFirst: "BSW",
  //       coupleLast: "BNB",
  //       dealValue:  Math.random()
  //     },...prevState].splice(0,2))
  //   }
  //
  //   const interval = setInterval(async ()=>{
  //     newData();
  //   },2000)
  //
  //
  //   return () => clearInterval(interval);
  // },[])

  return (
    <Wrapper isPushed={isPushed} footerTitle={footerTitle} isDark={isDark} deals={deals}>
      <Inner>
        <Text color="contrast" small mb="12px">
          {footerTitle}
        </Text>

        {deals &&
          deals.map((item, index) => {
            if (index === 0) {
             return (
               <DealItem
                 key={index.toString()}
                 isDark={isDark}
                 dealName={item.dealName}
                 dealDate={item.dealDate}
                 coupleFirst={item.coupleFirst}
                 coupleLast={item.coupleLast}
                 dealValue={item.dealValue}
                 animate
               />
             )
            }
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
