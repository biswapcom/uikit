import styled from "styled-components";
// import { space, SpaceProps } from "styled-system";

interface BannerBodyProps {
  size?: number;
}

const BannerBody = styled.p<BannerBodyProps>`
  color: ${({ theme }) => theme.colors.warning};
  margin-bottom: 24px;
  font-weight: 900;
  min-height: 64px;
  font-size: 26px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default BannerBody;
