import React, { FC } from "react";
import styled from "styled-components";

import { Button } from "../../components/Button";
import RevertTime from "../../components/Svg/Icons/RevertTime";

import { darkColors } from "../../theme";
import { BannerProps } from "./types";

const ReferralBannerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  width: 352px;
  padding-top: 24px;
  padding-left: 24px;
  border-radius: 16px;
`;

const ReferralLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ReferralBannerRightContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const ReferralBannerText = styled.span`
  margin-left: 6px;
`;

const ReferralBannerTextAmount = styled.h2`
  color: ${() => darkColors.background};
  margin-bottom: 16px;
  font-size: 24px;
`;

const ReferralBannerTitle = styled.h2`
  color: ${() => darkColors.text};
  line-height: 19px;
  margin-bottom: 6px;
  font-size: 16px;
`;

const Banner: FC<BannerProps> = ({ title, text, buttonText, history, imageSource }): JSX.Element => {
  return (
    <ReferralBannerStyled>
      <ReferralLeftContent>
        <ReferralBannerTitle>{title}</ReferralBannerTitle>
        <ReferralBannerTextAmount>{text}</ReferralBannerTextAmount>
        <Button variant="success" scale="md">
          {buttonText}
        </Button>
      </ReferralLeftContent>
      <ReferralBannerRightContent>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 7 }}>
          <div>
            <RevertTime />
          </div>
          <ReferralBannerText>{history}</ReferralBannerText>
        </div>
        <div>
          <img src={imageSource} style={{ width: 136, borderRadius: 16 }} alt="" />
        </div>
      </ReferralBannerRightContent>
    </ReferralBannerStyled>
  );
};

Banner.defaultProps = {
  title: "Referral Swap",
  text: "100.0000 BSW",
  buttonText: "Withdraw",
  history: "history",
};

export default Banner;
