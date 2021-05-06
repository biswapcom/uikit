import styled from "styled-components";
import Button from "../../../components/Button/Button";

const MenuButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.dropDown};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  padding: 0;
  position: absolute;
  top: 50%;
  left: -12px;
  transform: translateY(-50%);
`;
MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;
