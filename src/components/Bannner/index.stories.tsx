import React from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import styled from "styled-components";
import { Button } from "../Button";

// import { variants } from "./types";

// interface ThemedIconLabel {
//   variant: AlertProps["variant"];
//   theme: DefaultTheme;
//   hasDescription: boolean;
// }

import Banner from "./Banner";
import BannerBody from "./BannerBody";
import BannerTitle from "./BannerTitle";

export default {
  title: "Components/Banner",
  component: Banner,
  argTypes: {},
} as Meta;

const Row = styled.div`
  margin-bottom: 32px;
`;

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "350px" }}>
      <Row>
        <Banner>
          <BannerTitle as="h2">Farming BSW and Earn up to:</BannerTitle>
          <BannerBody as="p">1200.34% APR</BannerBody>
          <Button variant="danger" scale="sm">
            Start farming
          </Button>
        </Banner>
      </Row>
      <Row>
        <Banner>
          <BannerTitle as="h2">3 types Referral rewards earn from:</BannerTitle>
          <BannerBody as="p">Swap, Pools, Farming</BannerBody>
          <Button variant="danger" scale="sm">
            Start staking
          </Button>
        </Banner>
      </Row>
      <Row>
        <Banner>
          <BannerTitle as="h2">Stake Tokens in pool Liquidity and earn up to:</BannerTitle>
          <BannerBody as="p">350.34% APR</BannerBody>
          <Button variant="danger" scale="sm">
            Start liquidity
          </Button>
        </Banner>
      </Row>
      <Row>
        <Banner>
          <BannerTitle as="h2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis ullam incidunt, quis rerum
            delectus sed sapiente quam dignissimos perspiciatis? Reprehenderit officiis quasi voluptate eveniet
            molestias, cupiditate dolorum hic voluptas.
          </BannerTitle>
          <BannerBody as="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis ullam incidunt, quis rerum
            delectus sed sapiente quam dignissimos perspiciatis? Reprehenderit officiis quasi voluptate eveniet
            molestias, cupiditate dolorum hic voluptas.
          </BannerBody>
          <Button variant="danger" scale="sm">
            Start liquidity
          </Button>
        </Banner>
      </Row>
    </div>
  );
};
