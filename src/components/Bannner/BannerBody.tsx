import styled from "styled-components";
// import { space, SpaceProps } from "styled-system";

interface BannerBodyProps {
  size?: number;
}

const BannerBody = styled.div<BannerBodyProps>`
  color: ${({ theme }) => theme.colors.warning};
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 32px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export default BannerBody;
