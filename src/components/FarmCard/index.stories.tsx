import React from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import FarmCard from "./FarmCard";
import FarmCardHead from "./FarmCardHead";
import FarmCardBody from "./FarmCardBody";

import BinanceIcon from "../Svg/Icons/Binance";
import LogoIcon from "../Svg/Icons/Logo";
import { Button } from "../Button";
import { Badge } from "../Badge";

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
    <>
      <div style={{ padding: "16px", width: "400px" }}>
        <FarmCard isSoon>
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
            <Badge badgeType="hot">Hot</Badge>
          </FarmCardBody>
        </FarmCard>
      </div>
      <div style={{ padding: "16px", width: "400px" }}>
        <FarmCard isNew>
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
            <Badge badgeType="new">New</Badge>
          </FarmCardBody>
        </FarmCard>
      </div>
      <div style={{ padding: "16px", width: "400px" }}>
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
    </>
  );
};
