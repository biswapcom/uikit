import React from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Badge from "./Badge";
import Heading from "../Heading/Heading";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div>
      <Heading mb={20}>Badges</Heading>
      <Badge badgeType="light">Light</Badge>
      <Badge badgeType="dark">Dark</Badge>
      <Badge badgeType="new">New</Badge>
      <Badge badgeType="hot">Hot</Badge>
      <Badge badgeType="warning">Warning</Badge>
      <Badge badgeType="primary">Primary</Badge>
      <Badge badgeType="any">any</Badge>
      <Badge badgeType="boost">Boosted</Badge>
      <Badge badgeType="warning" fontWeight='700' fontSize='18px' >up to 120%</Badge>
    </div>
  );
};
