import React from "react";
import styled from "styled-components";

interface FarmCardBodyProps {
  isSoon?: boolean;
  isNew?: boolean;
}

const StyledFarmCardBody = styled.div`
  display: flex;
  align-items: center;

  & > p {
    flex: 1 1;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: 900;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  & > div {
      position: absolute;
      top: 12px;
      right: 12px;
  }
`;

const FarmCardBody: React.FC<FarmCardBodyProps> = ({ children }) => {
  return <StyledFarmCardBody>{children}</StyledFarmCardBody>;
};

export default FarmCardBody;
