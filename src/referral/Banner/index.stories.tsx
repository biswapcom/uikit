/* eslint-disable-next-line */
// @ts-ignore
import React, { FC } from "react";

/* eslint-disable-next-line */
// @ts-ignore
import RevertLogo from "../../assets/RevertLogo.png";

// components
import ReferralBanner from "./Banner";

// types
import { data } from "./exampleData";

export default {
  title: "Referral/Banner",
  component: ReferralBanner,
  argTypes: {},
};

export const Default: FC = (): JSX.Element => {
  return (
    <div style={{ width: 352 }}>
      {data.map((item) => (
        <div key={item.id} style={{ marginTop: 10 }}>
          <ReferralBanner
            imageSource={RevertLogo}
            title={item.title}
            text={item.text}
            history={item.history}
            buttonText={item.buttonText}
          />
        </div>
      ))}
    </div>
  );
};
