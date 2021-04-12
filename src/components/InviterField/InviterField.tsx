import React, { FC } from "react";

// components
import StyledInvitedField from "./StyledInvitedField";
import Help from "../Svg/Icons/Help";
import { Badge } from "../Badge";
import { Text } from "../Text";

// types
import { IInviterField } from "./types";

const InviterField: FC<IInviterField> = ({ badgeTitle, inviterLink }) => {
  return (
    <StyledInvitedField>
      <Help color="#708DB7" />
      <div style={{ display: "flex" }}>
        <Text color="#708DB7" ml="6px">
          My inviter:
        </Text>
        <Text color="#fff" mx="10px">
          {inviterLink}
        </Text>
      </div>

      <Badge title={badgeTitle} />
    </StyledInvitedField>
  );
};

InviterField.defaultProps = {
  badgeTitle: "10%",
  inviterLink: "78asd...dfiud",
};

export default InviterField;
