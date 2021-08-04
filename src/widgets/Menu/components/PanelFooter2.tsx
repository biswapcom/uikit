import React from "react";
// import styled from "styled-components";
// import Text from "../../../components/Text/Text";
// import DealItem from "./DealItem";
import { PanelFooterProps } from "../types";

// eslint-disable-next-line import/order
import styled from "styled-components";

interface Props extends PanelFooterProps {
  isPushed: boolean;
}

const Wrapper = styled.div<Props>`
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: ${({ isPushed }) => (isPushed ? "block" : "none")};
  }
  
  .move-enter {
    opacity: 0.01;
    transform: translatey(-40px)
  }

  .move-enter-active {
    opacity: 1;
    transform: translatey(0);
    transition: all 500ms ease-in;
  }

  .move-exit {
    opacity: 1;
    transform: translateY(0)
  }

  .move-exit-active {
    opacity: 0.01;
    transform: translateY(10px);
    transition: all 500ms ease-in;
  }
`;

// const Inner = styled.div`
//   padding: 16px;
//   border-radius: 16px;
//   background-color: ${({ theme }) => theme.colors.dropDown};
//   height: 143px;
//   overflow: hidden;
// `;

const PanelFooter2: React.FC<Props> = ({isPushed,dealsForUIKit,showDeals}) => {
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
    <Wrapper isPushed={isPushed}>
      { showDeals &&
       dealsForUIKit()
      }
    </Wrapper>
    // <Wrapper isPushed={isPushed} footerTitle={footerTitle} isDark={isDark} deals={deals}>
    //   <Inner>
    //     <Text color="contrast" small mb="12px">
    //       {footerTitle}
    //     </Text>
    //       <>
    //         {deals && deals.length > 0 &&
    //         <>
    //           { showDeals &&
    //             dealsForUIKit()
    //           }
    //         </>
    //         }
    //       </>
    //     {/* {deals && */}
    //     {/*  deals.map((item, index) => { */}
    //     {/*    if (index === 0) { */}
    //     {/*     return ( */}
    //     {/*       <DealItem */}
    //     {/*         key={index.toString()} */}
    //     {/*         isDark={isDark} */}
    //     {/*         dealName={item.dealName} */}
    //     {/*         dealDate={item.dealDate} */}
    //     {/*         coupleFirst={item.coupleFirst} */}
    //     {/*         coupleLast={item.coupleLast} */}
    //     {/*         dealValue={item.dealValue} */}
    //     {/*         animate */}
    //     {/*       /> */}
    //     {/*     ) */}
    //     {/*    } */}
    //     {/*      return ( */}
    //     {/*        <DealItem */}
    //     {/*          key={index.toString()} */}
    //     {/*          isDark={isDark} */}
    //     {/*          dealName={item.dealName} */}
    //     {/*          dealDate={item.dealDate} */}
    //     {/*          coupleFirst={item.coupleFirst} */}
    //     {/*          coupleLast={item.coupleLast} */}
    //     {/*          dealValue={item.dealValue} */}
    //     {/*          animate={false} */}
    //     {/*        /> */}
    //     {/*      ); */}
    //     {/*  })} */}
    //   </Inner>
    // </Wrapper>
  );
};

export default PanelFooter2;
