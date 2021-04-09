import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 25" {...props} >
      <path xmlns="http://www.w3.org/2000/svg" d="M0 10.64V12.6666C0 12.8533 0.146667 13 0.333333 13H2.36C2.44667 13 2.53333 12.9666 2.59333 12.9L9.87333 5.62662L7.37333 3.12662L0.1 10.4C0.0333334 10.4666 0 10.5466 0 10.64ZM11.8067 3.69329C12.0667 3.43329 12.0667 3.01329 11.8067 2.75329L10.2467 1.19329C9.98667 0.933291 9.56667 0.933291 9.30667 1.19329L8.08667 2.41329L10.5867 4.91329L11.8067 3.69329Z" fill="evenodd"/>
    </Svg>
  );
};

export default Icon;
