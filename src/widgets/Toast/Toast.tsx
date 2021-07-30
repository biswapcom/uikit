import React, { useCallback, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { Alert, alertVariants } from "../../components/Alert";
import { Text } from "../../components/Text";
import ToastAction from "./ToastAction";
import { ToastProps, types } from "./types";

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
  //transition-delay: 0.2s;
`

const Toast: React.FC<ToastProps> = ({ toast, onRemove, style, ttl, ...props }) => {

  const [progress, setProgress] = useState<number>(100)
  const [progressRun, setProgressRun] = useState(true)
  const [currentTime, setCurrentTime] = useState(ttl)

  const timer = useRef<number>();
  const intervalRef = useRef(null)
  const removeHandler = useRef(onRemove);
  const { id, title, description, type, actions } = toast;

  console.log('timer',timer);
  console.log('prp',progressRun);
  useEffect(()=> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
     // @ts-ignore
    intervalRef.current = setTimeout(()=> {
      const timeToRemove = ttl * progress / 100
      const percent = ttl / 100;

      setCurrentTime(timeToRemove)

      console.log("timeToRemove", timeToRemove);

      if (progressRun) {
        setProgress((timeToRemove - percent) / percent);
      }
    },100)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return () => clearTimeout(intervalRef)
    // eslint-disable-next-line
  },[progress, progressRun])

  const handleRemove = useCallback(() => removeHandler.current(id), [id, removeHandler]);

  const handleMouseEnter = () => {
    clearTimeout(timer.current);
    setProgressRun(false);

    if (intervalRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clearTimeout(intervalRef.current)
    }

  };

  const handleMouseLeave = () => {
    setProgressRun(true);
    if (timer.current) {
      clearTimeout(timer.current);
    }

    if (intervalRef.current) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      clearTimeout(intervalRef.current)
    }

    timer.current = window.setTimeout(() => {
      handleRemove();
    }, currentTime);
  };

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      handleRemove();
    }, currentTime);

    return () => {
      clearTimeout(timer.current);
    };
    // eslint-disable-next-line
  }, [timer, handleRemove]);

  return (
    <CSSTransition timeout={250} style={style} {...props}>
      <StyledToast onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
        <ProgressWrapper  style={{width: '100%'}}>
          <ProgressLine style={{width: `${progress}%`}}/>
        </ProgressWrapper>
      </StyledToast>
    </CSSTransition>
  );
};

export default Toast;
