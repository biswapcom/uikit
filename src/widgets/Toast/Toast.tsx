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

interface ClearButtonProps {
  top: number;
}

const ClearAllButton = styled(Button)<ClearButtonProps>`
  position: absolute;
  right: 0;
  top: ${({top}) => `${-top}px`};
`

const StyledToast = styled.div`
  left: 50%;
  transform: translate(-50%, 0);
  position: fixed;
  max-width: calc(100% - 12px);
  transition: all 250ms ease-in;
  width: 100%;

  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1), 0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);
  border-radius: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    transform: none;
    left: auto;
    right: 35px;
    max-width: 350px;
  }
`;

const ProgressWrapper = styled.div`
  background-color: ${({theme})=> theme.colors.contrast}
  bottom: 0;
  min-height: 5px;
`

const ProgressLine = styled.div`
  background-color: ${({theme})=> theme.colors.success};
  height: 5px;
  transition: 100ms all;
  border-radius: 16px;
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

const SharingText = styled.div`
  display: flex;
  flex-direction: row;
`

const ActionContainer = styled.div`
`

const Toast: React.FC<ToastProps> = ({
                                       removeButtonPosition=60,
                                       clearAll,
                                       toast,
                                       style,
                                       handleMouseEnter,
                                       handleMouseLeave,
                                       handleRemove,
                                       progress,
                                       ...props
}) => {
  const {
    description,
    type,
    title,
    telegramDescription,
    tweeterDescription,
    hash,
    url,
  } = toast;

  return (
    <CSSTransition timeout={250} style={style} {...props}>
      <StyledToast onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {
          clearAll && (
            <ClearAllButton
              variant='text'
               top={removeButtonPosition}
              onClick={() => clearAll()}
            >
              <Text fontSize='16px' color='#1263F1' lineHeight='19px'>
                Clear All
              </Text>
            </ClearAllButton>
          )
        }
        <Alert style={{padding: '16px 0 0 0'}} title={title} variant={alertTypeMap[type]} onClick={handleRemove}>
            <AlertWrapper>
              {
                hash &&
                <LinkWrapper>
                  <LinkStyles target="_blank" href={`https://bscscan.com/tx/${hash}`}>
                    View on bscscan
                  </LinkStyles>
                  <LinkIcon ml='7px' width='18px' height='18px' color='primary'/>
                </LinkWrapper>
              }
              {description ? <Text color="#6B7D98" fontSize="12px" as="p" mb="8px" dangerouslySetInnerHTML={{__html: description}}/> : <></>}
              {
                telegramDescription && tweeterDescription && (
                  <ActionContainer>
                    <ToastAction telegramDescription={telegramDescription} tweeterDescription={tweeterDescription} title={title} url={url} thx={`https://bscscan.com/tx/${hash}`}/>
                    <Button p="0" scale="sm" variant='text' as='a' href='https://docs.biswap.org/sharing-season' target="_blank">
                      <SharingText>
                        <Text
                          fontSize='10px'
                          pl='0'
                          fontWeight='400'
                          lineHeight='12px'
                          color='#6b7d98'
                        >
                          *Check
                        </Text>
                        <Text
                          fontSize='10px'
                          pl='0'
                          fontWeight='400'
                          lineHeight='12px'
                          color="#1263F1"
                          ml="2px"
                        >
                          Sharing Season
                        </Text>
                        <Text
                          fontSize='10px'
                          pl='0'
                          fontWeight='400'
                          lineHeight='12px'
                          color='#6b7d98'
                          ml="2px"
                        >
                          details
                        </Text>
                      </SharingText>
                    </Button>
                  </ActionContainer>
                )
              }
            </AlertWrapper>
            <div style={{width: '100%'}}>
              <ProgressWrapper  style={{width: '100%'}}>
                {
                  progress ?  <ProgressLine style={{width: `${100 - progress}%`}}/> : null
                }

              </ProgressWrapper>
            </div>
        </Alert>
      </StyledToast>
    </CSSTransition>
  );
};

export default Toast;
