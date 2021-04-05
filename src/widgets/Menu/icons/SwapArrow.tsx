import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const SwapArrow: React.FC<SvgProps> = ({ ...props }) => {
  return (
    <Svg viewBox="0 0 12 10" fill="none" {...props}>
      <path fill="white" d="M5.28721 2.72727C5.28721 1.97415 4.68962 1.36364 3.95245 1.36364C3.21528 1.36364 2.61769 1.97415 2.61769 2.72727V7C2.61769 7.15062 2.73721 7.27273 2.88465 7.27273H3.72255C3.95126 7.27273 4.07406 7.54739 3.92432 7.724L2.19678 9.76196C2.09033 9.88753 1.89964 9.88753 1.79319 9.76196L0.0656467 7.724C-0.0840359 7.54739 0.0387625 7.27273 0.267469 7.27273H1.01598C1.16341 7.27273 1.28293 7.15062 1.28293 7V2.72727C1.28293 1.22104 2.47811 0 3.95245 0C5.4268 0 6.62198 1.22104 6.62198 2.72727V7.27273C6.62198 8.02585 7.21957 8.63636 7.95674 8.63636C8.69391 8.63636 9.2915 8.02585 9.2915 7.27273V3C9.2915 2.84938 9.17198 2.72727 9.02455 2.72727H8.27745C8.04874 2.72727 7.92594 2.45261 8.07568 2.276L9.80322 0.238037C9.90967 0.112471 10.1004 0.112471 10.2068 0.238037L11.9344 2.276C12.084 2.45261 11.9612 2.72727 11.7325 2.72727H10.8932C10.7458 2.72727 10.6263 2.84938 10.6263 3V7.27273C10.6263 8.77896 9.43108 10 7.95674 10C6.4824 10 5.28721 8.77896 5.28721 7.27273V2.72727Z"/>
    </Svg>
  )
};

export default React.memo(SwapArrow);