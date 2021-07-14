import styled from "styled-components";
import Button from "../../../components/Button/Button";

const MenuButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0 8px;
  border-radius: 8px;
  margin-right: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-right: 20px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`;
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
