import React from "react";
import Svg from "../../../../components/Svg/Svg";
import { SvgProps } from "../../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 14 14" {...props}>
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="14">
        <circle cx="7" cy="7" r="7" fill="#C4C4C4"/>
      </mask>
      <g mask="url(#mask0)">
        <rect width="14" height="14" fill="url(#pattern0)"/>
      </g>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="translate(-0.25) scale(0.00588235)"/>
        </pattern>
        <image id="image0" width="255" height="170" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAYAAABiS5mOAAAEYklEQVR4Ae3WgQ0AMQzCwOy/NFXn8L30A8Rg0dvd/BjoQK8DJ/Re6DKX+e8A+b18vPyiHSB/NHjrb/3JT37LH+0A+aPBW37LT37yW/5oB8gfDd7yW37yk9/yRztA/mjwlt/yk5/8lj/aAfJHg7f8lp/85Lf80Q6QPxq85bf85Ce/5Y92gPzR4C2/5Sc/+S1/tAPkjwZv+S0/+clv+aMdIH80eMtv+clPfssf7QD5o8FbfstPfvJb/mgHyB8N3vJbfvKT3/JHO0D+aPCW3/KTn/yWP9oB8keDt/yWn/zkt/zRDpA/Grzlt/zkJ7/lj3aA/NHgLb/lJz/5LX+0A+SPBm/5LT/5yW/5ox0gfzR4y2/5yU9+yx/tAPmjwVt+y09+8lv+aAfIHw3e8lt+8pPf8kc7QP5o8Jbf8pOf/JY/2gHyR4O3/Jaf/OS3/NEOkD8avOW3/OQnv+WPdoD80eAtv+UnP/ktf7QD5I8Gb/ktP/nJb/mjHSB/NHjLb/nJT37LH+0A+aPBW37LT37yW/5oB8gfDd7yW37yk9/yRztA/mjwlt/yk5/8lj/aAfJHg7f8lp/85Lf80Q6QPxq85bf85Ce/5Y92gPzR4C2/5Sc/+S1/tAPkjwZv+S0/+clv+aMdIH80eMtv+clPfssf7QD5o8FbfstPfvJb/mgHyB8N3vJbfvKT3/JHO0D+aPCW3/KTn/yWP9oB8keDt/yWn/zkt/zRDpA/Grzlt/zkJ7/lj3aA/NHgLb/lJz/5LX+0A+SPBm/5LT/5yW/5ox0gfzR4y2/5yU9+yx/twM2HAAJJAuRPxu5oBDbyawECUQLkjwbvbATIrwMIRAmQPxq8sxEgvw4gECVA/mjwzkaA/DqAQJQA+aPBOxsB8usAAlEC5I8G72wEyK8DCEQJkD8avLMRIL8OIBAlQP5o8M5GgPw6gECUAPmjwTsbAfLrAAJRAuSPBu9sBMivAwhECZA/GryzESC/DiAQJUD+aPDORoD8OoBAlAD5o8E7GwHy6wACUQLkjwbvbATIrwMIRAmQPxq8sxEgvw4gECVA/mjwzkaA/DqAQJQA+aPBOxsB8usAAlEC5I8G72wEyK8DCEQJkD8avLMRIL8OIBAlQP5o8M5GgPw6gECUAPmjwTsbAfLrAAJRAuSPBu9sBMivAwhECZA/GryzESC/DiAQJUD+aPDORoD8OoBAlAD5o8E7GwHy6wACUQLkjwbvbATIrwMIRAmQPxq8sxEgvw4gECVA/mjwzkaA/DqAQJQA+aPBOxsB8usAAlEC5I8G72wEyK8DCEQJkD8avLMRIL8OIBAlQP5o8M5GgPw6gECUAPmjwTsbAfLrAAJRAuSPBu9sBMivAwhECZA/GryzESC/DiAQJUD+aPDORoD8OoBAlAD5o8E7GwHy6wACUQLkjwbvbATIrwMIRAmQPxq8sxEgvw4gECVA/mjwzkaA/DqAQJQA+aPBOxsB8usAAlEC5I8G72wEyK8DCEQJPDacI6Wrl7UvAAAAAElFTkSuQmCC"/>
      </defs>
    </Svg>
  );
};

export default Icon;
