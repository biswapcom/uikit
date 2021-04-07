import React from "react";
import styled from "styled-components";

interface BannerProps {
  large?: boolean;
  children: Array<React.ReactElement>;
}

const StyledBanner = styled.div`
  padding: 32px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.gradients.cardBlue};
  display: flex;
`;

const StyledBannerBoby = styled.div<BannerProps>`
  width: ${({ large }) => (large ? "50%" : "100%")};
  align-items: ${({ large }) => large && "flex-start"};
  display: flex;
  flex-direction: column;
`;

const StyledBannerLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Banner: React.FC<BannerProps> = ({ large, children }) => {
  return (
    <StyledBanner>
      <StyledBannerBoby large={large}>
        {children[0]}
        {children[1]}
        {children[2]}
      </StyledBannerBoby>

      {children[3] && <StyledBannerLeft>{children[3]}</StyledBannerLeft>}
    </StyledBanner>
  );
};

Banner.defaultProps = {
  large: false,
};

export default Banner;
