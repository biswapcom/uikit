import React from "react";
import styled from "styled-components";

interface FarmCardProps {
  isSoon?: boolean;
  isNew?: boolean;
  children: Array<React.ReactElement>;
}

interface StyledFarmCardProps {
  isNew?: boolean;
}

const StyledFarmCard = styled.div<StyledFarmCardProps>`
  position: relative;
  padding: 24px;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  // &:before {
  //   content: "New";
  //   display: ${({ isNew }) => (isNew ? "block" : "none")};
  //   color: #fff;
  //   background-color: #1dc872;
  //   border-radius: 16px;
  //   position: absolute;
  //   top: 12px;
  //   right: 12px;
  //   font-size: 10px;
  //   padding: 5px 10px;
  //   text-align: center;
  //   min-width: 45px;
  // }
`;

const FarmCard: React.FC<FarmCardProps> = ({ isSoon, isNew, children }) => {
  return <StyledFarmCard isNew={isNew}>{children}</StyledFarmCard>;
};

FarmCard.defaultProps = {
  isSoon: false,
  isNew: false,
};

export default FarmCard;
