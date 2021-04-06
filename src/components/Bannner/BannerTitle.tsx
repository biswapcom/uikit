import styled from "styled-components";
// import { space, SpaceProps } from "styled-system";

interface BannerTitleProps {
  size?: number;
}

const BannerTitle = styled.div<BannerTitleProps>`
  color: ${({ theme }) => theme.colors.contrast};
  margin-bottom: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default BannerTitle;
