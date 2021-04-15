import React from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import { Button } from "../Button";

import Banner from "./Banner";
import BannerBody from "./BannerBody";
import BannerTitle from "./BannerTitle";

export default {
  title: "Components/Banner",
  component: Banner,
  argTypes: {
    title: {
      control: { type: "text" },
      defaultValue: "3 types Referral rewards earn from:",
    },
    body: {
      control: { type: "text" },
      defaultValue: "Swap, Pools, Farming",
    },
  },
} as Meta;

const Slider: React.FC = () => {
  return <div>Slider</div>;
};

export const Default: React.FC = ({ data, ...args }) => {
  return (
    <>
      <div style={{ padding: "32px", width: "350px" }}>
        <Banner>
          <BannerTitle>{args.title}</BannerTitle>
          <BannerBody>{args.body}</BannerBody>
          <Button variant="danger" scale="sm">
            Start farming
          </Button>
        </Banner>
      </div>
      <div style={{ padding: "32px", width: "900px" }}>
        <Banner large>
          <BannerTitle>{args.title}</BannerTitle>
          <BannerBody>{args.body}</BannerBody>
          <Button variant="danger" scale="sm">
            Start farming
          </Button>
          <Slider />
        </Banner>
      </div>
    </>
  );
};
