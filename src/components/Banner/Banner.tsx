import styled from "styled-components";

const Banner = styled.div`
  padding: 32px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.gradients.cardBlue};
  display: flex;
  flex-direction: column;
`;

export default Banner;
