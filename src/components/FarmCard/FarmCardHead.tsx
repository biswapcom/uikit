import React from "react";
import styled from "styled-components";

interface FarmCardHeadProps {
  isSoon?: boolean;
  isNew?: boolean;
  children: Array<React.ReactElement>;
}

const StyledFarmCardHead = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  column-gap: 8px;
  margin-bottom: 24px;

  & > img {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    &:nth-child(1) {
      box-shadow: 0 0 0 3px #fff;
      z-index: 2;
    }
    &:nth-child(2) {
      margin-left: 30px;
      z-index: 1;
    }
  }

  & > p {
    align-self: center;
    grid-column: 2 / 3;
    font-weight: 900;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.invertedContrast};

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  & > span {
    align-self: center;
    grid-column: 2 / 3;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textSubtle};

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const FarmCardHead: React.FC<FarmCardHeadProps> = ({ children }) => {
  return <StyledFarmCardHead>{children}</StyledFarmCardHead>;
};

export default FarmCardHead;
