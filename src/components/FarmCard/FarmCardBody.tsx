import React from "react";
import styled from "styled-components";

interface FarmCardBodyProps {
  isSoon?: boolean;
  isNew?: boolean;
}

const StyledFarmCardBody = styled.div`
  /* padding: 32px; */
  /* border-radius: 24px; */
  /* background-color: ${({ theme }) => theme.colors.contrast}; */
  /* background-color: #fff; */
  /* display: flex; */

  display: flex;
  align-items: center;

  & > p {
    flex: 1 1;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 24px;
    font-weight: 600;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const FarmCardBody: React.FC<FarmCardBodyProps> = ({ children }) => {
  return <StyledFarmCardBody>{children}</StyledFarmCardBody>;
};

export default FarmCardBody;
