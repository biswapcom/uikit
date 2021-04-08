import React from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import FarmCard from "./FarmCard";
import FarmCardHead from "./FarmCardHead";
import FarmCardBody from "./FarmCardBody";

import BinanceIcon from "../Svg/Icons/Binance";
import LogoIcon from "../Svg/Icons/Logo";
import { Button } from "../Button";

export default {
  title: "Components/FarmCard",
  component: FarmCard,
  argTypes: {
    title: {
      control: { type: "text" },
      defaultValue: "BNB - BSW LP",
    },
    subtitle: {
      control: { type: "text" },
      defaultValue: "Liquidity $237 908 749",
    },
    body: {
      control: { type: "text" },
      defaultValue: "APR 4 378.83%",
    },
  },
} as Meta;

export const Default: React.FC = ({ data, ...args }) => {
  return (
    <div style={{ padding: "32px", width: "400px" }}>
      <FarmCard>
        <FarmCardHead>
          <LogoIcon />
          <BinanceIcon />
          <p>{args.title}</p>
          <span>{args.subtitle}</span>
        </FarmCardHead>
        <FarmCardBody>
          <p>{args.body}</p>
          <Button variant="primary" scale="sm">
            Farm
          </Button>
        </FarmCardBody>
      </FarmCard>
    </div>
  );
};
