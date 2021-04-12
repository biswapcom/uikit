import React, { FC } from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";

// components
import Dashboard from "./Dashboard";
import { data, totalData } from "./exampleData";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Friends from '../../assets/Friends.png'

export default {
  title: "Referral/Dashboard",
  component: Dashboard,
  argTypes: {},
} as Meta;

export const Default: FC = (): JSX.Element => {
  return (
    <div style={{ width: 1120 }}>
      <Dashboard imageSource={Friends} data={data} totalData={totalData} />
    </div>
  );
};
