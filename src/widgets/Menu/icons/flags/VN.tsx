import React from "react";
import Svg from "../../../../components/Svg/Svg";
import { SvgProps } from "../../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 14 14" {...props}>
      <mask id="mask0vn" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
        <circle cx="7" cy="7" r="7" fill="#C4C4C4"/>
      </mask>
      <g mask="url(#mask0vn)">
        <path d="M17 0H-3V14H17V0Z" fill="#DA251D"/>
        <path d="M7 2.44922L4.21804 11L11.5 5.7198H2.5L9.78196 11L7 2.44922Z" fill="#FFFF00"/>
      </g>
    </Svg>
  );
};

export default Icon;
