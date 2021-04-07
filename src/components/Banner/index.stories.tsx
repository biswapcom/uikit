import React from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
// import styled from "styled-components";
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
      defaultValue: "3 types referral rewards earn from:",
    },
    body: {
      control: { type: "text" },
      defaultValue: "Swap, Pools, Farming",
    },
  },
} as Meta;

export const Default: React.FC = ({ data, ...args }) => {
  return (
    <div style={{ padding: "32px", width: "350px" }}>
      <Banner>
        <BannerTitle>{args.title}</BannerTitle>
        <BannerBody>{args.body}</BannerBody>
        <Button variant="danger" scale="sm">
          Start farming
        </Button>
      </Banner>
    </div>
  );
};
