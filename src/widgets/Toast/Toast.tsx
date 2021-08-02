import React from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { Alert, alertVariants } from "../../components/Alert";
import { Text } from "../../components/Text";
import ToastAction from "./ToastAction";
import { ToastProps, types } from "./types";
import { Button } from "../../components/Button";
import { LinkIcon } from "../../components/Svg";

const alertTypeMap = {
  [types.INFO]: alertVariants.INFO,
  [types.SUCCESS]: alertVariants.SUCCESS,
  [types.DANGER]: alertVariants.DANGER,
  [types.WARNING]: alertVariants.WARNING,
};

const StyledToast = styled.div`
  overflow: hidden;
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
  background-color: ${({theme})=> theme.colors.contrast}
  //border-radius: .5rem;
  bottom: 0;
  min-height: 5px;
  //border-bottom-left-radius: 16px;
  //border-bottom-right-radius: 16px;
`

const ProgressLine = styled.div`
  background-color: #1DC872;
  height: 5px;
  transition: 100ms all;
  border-radius: 16px;
  //border-bottom-left-radius: 16px;
  //border-bottom-right-radius: 16px;
`

const AlertWrapper = styled.div`
  padding: 0 16px;
`
const LinkWrapper = styled.div`
  margin: 14px 0 11px 0;
  display: flex;
  align-items: center;
`

const LinkStyles = styled.a`
 color: ${({theme})=> theme.colors.primary};
 font-size: 14px;
 font-weight: 700;
 line-height: 21px;
  text-decoration: underline;
`



const Toast: React.FC<ToastProps> = ({removeButtonPosition=60,zIndex,clearAll,toast, style,handleMouseEnter,handleMouseLeave,handleRemove, progress, ...props }) => {
  const {showDetails, description, type, actions, title} = toast;
  return (
    <CSSTransition timeout={250} style={style} {...props}>
      <StyledToast onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {
          clearAll && (
            <Button
              variant='text'
              style={{position: 'absolute',right: 0, top: -removeButtonPosition,zIndex: Number(zIndex)}} onClick={() => clearAll()}>
              <Text fontSize='16px' color='primary' lineHeight='19px'>
                Clear All
              </Text>
            </Button>
          )
        }
        <Alert style={{padding: '16px 0 0 0'}} title={title} variant={alertTypeMap[type]} onClick={handleRemove}>
          {actions ? (
            <AlertWrapper>
              <LinkWrapper>
                <LinkStyles href='!#'>
                  View on bscscan
                </LinkStyles>
                <LinkIcon ml='7px' width='18px' height='18px' color='primary'/>
              </LinkWrapper>
              <Text as="p" mb="8px">
                {description}
              </Text>
              <ToastAction title={title} actions={actions} />
            </AlertWrapper>
          ) : (
            description
          )}
          {
            showDetails && (
              <Text
                mt='8px'
                ml='16px'
                mb='16px'
                fontSize='10px'
                fontWeight='400'
                lineHeight='12px'
                color='#6b7d98'
              >
                *Share your earnings in our official telegram group
              </Text>
            )
          }
            <div style={{width: '100%'}}>
              <ProgressWrapper  style={{width: '100%'}}>
                {
                  progress ?  <ProgressLine style={{width: `${progress}%`}}/> : null
                }

              </ProgressWrapper>
            </div>
        </Alert>
      </StyledToast>
    </CSSTransition>
  );
};

export default Toast;
