/* eslint-disable-next-line */
// @ts-ignore
import React,{FC} from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";

// components
import ReferralBanner from "./ReferralBanner";
import ReferralBannerTitle from "./ReferralBannerTitle";
import ReferralLeftContent from "./ReferralLeftContent";
import ReferralBannerRightContent from "./ReferralBannerRightContent";
import ReferralBannerTextAmount from "./ReferralBannerTextAmount";
import ReferralBannerText from "./ReferralBannerText";
import {Button} from '../../components/Button'

// svg
import RevertTime from "../../components/Svg/Icons/RevertTime";

export default {
  title: 'Referral/Banner',
  component: ReferralBanner,
  argTypes: {
    title: {
      control: { type: "text" },
      defaultValue: "Referral Swap",
    },
    text: {
      control: { type: "text" },
      defaultValue: "100.0000 BSW",
},
    history: {
      control: {type: 'text'},
      defaultValue: "History"
    },
    buttonText: {
      control: {type: 'text'},
      defaultValue: 'Withdraw'
    }
  },
} as Meta;

export const Default: FC = ({...args}): JSX.Element => {
  return (
    <div style={{width: 352}}>
      <ReferralBanner>
        <ReferralLeftContent>
          <ReferralBannerTitle>{args.title}</ReferralBannerTitle>
          <ReferralBannerTextAmount>{args.text}</ReferralBannerTextAmount>
          <Button variant='success' scale='md'>{args.buttonText}</Button>
        </ReferralLeftContent>
        <ReferralBannerRightContent>
          <div style={{display: 'flex',justifyContent: 'center',marginBottom: 7}}>
            <div>
            <RevertTime/>
          </div>
            <ReferralBannerText>{args.history}</ReferralBannerText>
          </div>
          <div>
            <img src={require('../../assets/RevertLogo.png')} style={{width: 136, borderRadius: 16}} alt="" />
          </div>
        </ReferralBannerRightContent>
      </ReferralBanner>
    </div>
  )
}

