import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M0 12.0057L0 5.8403C0 5.41523 0.227073 5.02171 0.597324 4.80513L5.96072 1.66786C6.34124 1.44527 6.81401 1.44397 7.19579 1.66446L12.6357 4.80618C13.0093 5.02192 13.2389 5.41728 13.2389 5.84475V8.06681L10.8636 9.40682V7.30474C10.8636 6.88322 10.6403 6.49245 10.2749 6.27469L7.19233 4.43725C6.81283 4.21104 6.33888 4.20639 5.9549 4.4251L3.01492 6.09972C2.6378 6.31453 2.40543 6.71187 2.40543 7.14192V10.6338C2.40543 11.0551 2.62852 11.4457 2.99357 11.6636L5.95654 13.4316C6.339 13.6599 6.81728 13.6629 7.20263 13.4394L16.7802 7.88594C17.1586 7.66648 17.6274 7.66517 18.0071 7.88251L23.3927 10.965C23.7686 11.1802 24 11.5768 24 12.006V18.2288C24 18.6589 23.7676 19.0562 23.3905 19.271L18.0046 22.3391C17.6261 22.5547 17.1598 22.5535 16.7825 22.336L11.4676 19.272C11.0936 19.0564 10.8636 18.6608 10.8636 18.233L10.8636 16.0175L13.2389 14.6418V16.8496C13.2389 17.2751 13.4664 17.669 13.8373 17.8854L16.7781 19.6015C17.1576 19.823 17.6286 19.8246 18.0096 19.6057L21.007 17.8841C21.382 17.6687 21.6127 17.2726 21.6127 16.8441V13.3907C21.6127 12.9631 21.3829 12.5677 21.0092 12.3519L18.0043 10.6175C17.6262 10.3992 17.1585 10.3983 16.7796 10.6151L7.18666 16.1036C6.80964 16.3193 6.34468 16.3196 5.96737 16.1044L0.608812 13.0476C0.232073 12.8326 0 12.4355 0 12.0057Z"/>
    </Svg>
  );
};

export default Icon;
