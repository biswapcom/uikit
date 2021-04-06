import styled from "styled-components";

interface BannerProps {
  size?: number;
}

const Banner = styled.div<BannerProps>`
  padding: 32px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.gradients.cardBlue};
  display: flex;
  flex-direction: column;
`;

export default Banner;
