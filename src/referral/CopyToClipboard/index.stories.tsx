import React, { FC } from "react";

// components
import CopyToClipboard from "./CopyClipboard";

export default {
  title: "Referral/CopyToClipboard",
  component: CopyToClipboard,
  argTypes: {},
};

export const Default: FC = (): JSX.Element => {
  return (
    <div style={{ width: 384 }}>
      <CopyToClipboard value="http://biswap.com/5l4oBhGdsHac0e ..." />
    </div>
  );
};
