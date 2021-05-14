import React, { FC } from "react";
import styled, { DefaultTheme } from "styled-components";
import { BadgeProps } from "./types";
import Text from "../Text/Text";

interface StyledBadgeProps extends BadgeProps {
  theme: DefaultTheme;
}

const getBadgeBg = ({ badgeType = "light", theme }: StyledBadgeProps) => {
  if (badgeType === "light") {
    return theme.colors.tertiary;
  }

  if (badgeType === "dark") {
    return theme.colors.dropDown;
  }

  if (badgeType === "new") {
    return theme.colors.success;
  }

  if (badgeType === "hot") {
    return theme.colors.failure;
  }

  if (badgeType === "primary") {
    return theme.colors.primary;
  }

  if (badgeType === "warning") {
    return theme.colors.warning;
  }

  return theme.colors.inputBorder;
};

const getBadgeColor = ({ badgeType = "light", theme }: StyledBadgeProps) => {
  if (badgeType === "light" || badgeType === "dark") {
    return theme.colors.text;
  }

  if (badgeType === "new" || badgeType === "primary" || badgeType === "hot") {
    return theme.colors.contrast;
  }

  if (badgeType === "warning") {
    return theme.colors.background;
  }

  return theme.colors.contrast;
};

const Wrapper = styled.div<BadgeProps>`
  display: inline-flex;
  padding: 4px 12px;
  background: ${getBadgeBg};
  color: ${getBadgeColor};
  border-radius: 16px;
`;

const Badge: FC<BadgeProps> = ({ children, badgeType }) => {
  return (
    <Wrapper badgeType={badgeType}>
      <Text fontSize="10px" color="inherit" bold>
        {children}
      </Text>
    </Wrapper>
  );
};

export default Badge;
