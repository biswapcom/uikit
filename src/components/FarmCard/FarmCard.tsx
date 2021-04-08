import React from "react";
import styled from "styled-components";

interface FarmCardProps {
  isSoon?: boolean;
  isNew?: boolean;
  children: Array<React.ReactElement>;
}

const StyledFarmCard = styled.div`
  padding: 24px;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const FarmCard: React.FC<FarmCardProps> = ({ isSoon, isNew, children }) => {
  return <StyledFarmCard>{children}</StyledFarmCard>;
};

FarmCard.defaultProps = {
  isSoon: false,
  isNew: false,
};

export default FarmCard;
