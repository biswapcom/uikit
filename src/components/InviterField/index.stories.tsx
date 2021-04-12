import React, { FC } from "react";

// components
import InviterField from "./InviterField";

export default {
  title: "Components/InvitedField",
  component: InviterField,
  argTypes: {},
};

export const Default: FC = (): JSX.Element => {
  return (
    <div style={{ width: "300px" }}>
      <InviterField />
    </div>
  );
};
