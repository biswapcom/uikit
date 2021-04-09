import React, { FC } from "react";

// components
import LinkCard from './LinkCard'
import {ReferralLink, data} from './exampleData'

export default {
  title: 'Referral/LinkCard',
  component: LinkCard,
  argTypes: {}
}

export const Default: FC = () => {
  return (
    <div style={{width: 450}}>
        <LinkCard
          data={data}
          ReferralLink={ReferralLink}/>
    </div>
  );
};