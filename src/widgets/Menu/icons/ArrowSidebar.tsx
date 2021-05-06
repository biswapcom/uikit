import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <path d="M9.80657 10.5867L7.21991 7.99999L9.80657 5.41332C10.0666 5.15332 10.0666 4.73332 9.80657 4.47332C9.54657 4.21332 9.12657 4.21332 8.86657 4.47332L5.80657 7.53332C5.54657 7.79332 5.54657 8.21332 5.80657 8.47332L8.86657 11.5333C9.12657 11.7933 9.54657 11.7933 9.80657 11.5333C10.0599 11.2733 10.0666 10.8467 9.80657 10.5867Z" />
    </Svg>
  );
};

export default Icon;
