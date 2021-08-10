import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import Flex from "../../components/Box/Flex";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
}

const StyledModal = styled.div`
  background-color: #fff;
  border-radius: 16px 16px 0 0;  
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
    min-width: 416px;
    max-width: 100%;
    border-radius: 16px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 32px 32px 24px;
  }
  
  .closeModal {
    width: 24px;
    height: 24px;
  }
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const ModalBody = styled.div`
  padding: 0 16px 24px;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 0 32px 32px;
  }
`

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
}) => (
  <StyledModal>
    <ModalHeader>
      <ModalTitle>
        {onBack && (
          <IconButton variant="text" onClick={onBack} area-label="go back" mr="8px">
            <ArrowBackIcon color="primary" />
          </IconButton>
        )}
        <Heading>{title}</Heading>
      </ModalTitle>
      {!hideCloseButton && (
        <IconButton variant="text" className="closeModal" scale="sm" ml="12px" onClick={onDismiss} aria-label="Close the dialog">
          <CloseIcon width="24px" color="card" />
        </IconButton>
      )}
    </ModalHeader>
    <ModalBody>
      {children}
    </ModalBody>
  </StyledModal>
);

export default Modal;
