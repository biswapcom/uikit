import React, { FC } from "react";

// styled components
import StyledBadge from "./StyledBadge";

// types
import { BadgeProps } from "./types";

const Badge: FC<BadgeProps> = ({ title, color, background }) => {
  return (
    <StyledBadge color={color} background={background}>
      <span>{title}</span>
    </StyledBadge>
  );
};

Badge.defaultProps = {
  title: "Soon",
  color: "#07162D",
  background: "#FFDB1C",
};

export default Badge;
