import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M11.6566 3.3244C11.8493 3.14234 12.1507 3.14234 12.3434 3.3244L19.7463 10.3184C20.0751 10.629 19.8553 11.1818 19.4029 11.1818H4.59706C4.14473 11.1818 3.92489 10.629 4.25369 10.3184L11.6566 3.3244Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.13647 10.2727C5.86033 10.2727 5.63647 10.4966 5.63647 10.7727V18.8636C5.63647 19.1398 5.86033 19.3636 6.13647 19.3636L10.1819 19.3636V13H13.8182V19.3636L17.8637 19.3636C18.1399 19.3636 18.3637 19.1398 18.3637 18.8636V10.7727C18.3637 10.4966 18.1399 10.2727 17.8637 10.2727H6.13647Z"/>
    </Svg>
  );
};

export default Icon;
