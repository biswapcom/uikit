import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M7.5 13H15C17.2091 13 19 14.7909 19 17V18" stroke="white" strokeWidth="4"/>
      <path d="M15 9.5C15 9.22386 14.7761 9 14.5 9H9.5C9.22386 9 9 9.22386 9 9.5V12H15V9.5Z"/>
      <rect width="4" height="3" transform="matrix(-1 0 0 1 14 7)"/>
      <rect width="7" height="3" rx="0.5" transform="matrix(3.8359e-08 1 1 -4.98107e-08 3 9)"/>
      <rect width="8" height="3" rx="1.5" transform="matrix(-1 0 0 1 16 5)"/>
      <path d="M17 20.25C17 19.8358 17.3358 19.5 17.75 19.5H20.25C20.6642 19.5 21 19.8358 21 20.25C21 20.6642 20.6642 21 20.25 21H17.75C17.3358 21 17 20.6642 17 20.25Z"/>
    </Svg>
  );
};

export default Icon;
