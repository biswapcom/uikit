import styled from "styled-components";
// import { space, SpaceProps } from "styled-system";

interface BannerTitleProps {
  size?: number;
}

const BannerTitle = styled.h2<BannerTitleProps>`
  color: ${({ theme }) => theme.colors.contrast};
  min-height: 32px;
  margin-bottom: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default BannerTitle;
