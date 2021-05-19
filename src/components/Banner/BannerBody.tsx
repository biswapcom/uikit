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
  font-size: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default BannerBody;
