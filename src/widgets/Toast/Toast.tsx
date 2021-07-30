import React from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { Alert, alertVariants } from "../../components/Alert";
import { Text } from "../../components/Text";
import ToastAction from "./ToastAction";
import { ToastProps, types } from "./types";
import { Button } from "../../components/Button";

const alertTypeMap = {
  [types.INFO]: alertVariants.INFO,
  [types.SUCCESS]: alertVariants.SUCCESS,
  [types.DANGER]: alertVariants.DANGER,
  [types.WARNING]: alertVariants.WARNING,
};

const StyledToast = styled.div`
  right: 16px;
  position: fixed;
  max-width: calc(100% - 32px);
  transition: all 250ms ease-in;
  width: 100%;

  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1), 0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);
  border-radius: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 400px;
  }
`;

const ProgressWrapper = styled.div`
  background-color: rgb(233, 233, 233);
  border-radius: .5rem;
`

const ProgressLine = styled.div`
  background-color: rgb(62, 122, 235);
  height: 10px;
  border-radius: 1rem;
  transition: 100ms all;
`

const Toast: React.FC<ToastProps> = ({ removeButtonPosition=60,zIndex,clearAll,toast, style,handleMouseEnter,handleMouseLeave,handleRemove, progress, ...props }) => {
  const { title, description, type, actions } = toast;
  return (
    <CSSTransition timeout={250} style={style} {...props}>
      <StyledToast onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {
          clearAll && (
            <Button
              variant='text'
              style={{position: 'absolute',right: 0,top: -removeButtonPosition,zIndex: Number(zIndex)}} onClick={() => clearAll()}>
              <Text fontSize='16px' color='primary' lineHeight='19px'>
                Clear All
              </Text>
            </Button>
          )
        }
        <Alert title={title} variant={alertTypeMap[type]} onClick={handleRemove}>
          {actions ? (
            <>
              <Text as="p" mb="8px">
                {description}
              </Text>
              <ToastAction actions={actions} />
            </>
          ) : (
            description
          )}
        </Alert>
        {progress && (
          <ProgressWrapper  style={{width: '100%'}}>
            <ProgressLine style={{width: `${progress}%`}}/>
          </ProgressWrapper>
        )}

      </StyledToast>
    </CSSTransition>
  );
};

export default Toast;
