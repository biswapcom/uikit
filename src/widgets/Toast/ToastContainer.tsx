import React, { useCallback, useEffect, useRef, useState } from "react";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import Toast from "./Toast";
import { ToastContainerProps } from "./types";

const ZINDEX = 1000;
const BOTTOM_POSITION = 35; // Initial position from the bottom

const StyledToastContainer = styled.div`
  .enter,
  .appear {
    opacity: 0.01;
  }

  .enter.enter-active,
  .appear.appear-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

  .exit {
    opacity: 1;
  }

  .exit.exit-active {
    opacity: 0.01;
    transition: opacity 250ms ease-out;
  }
`;

const ToastContainer: React.FC<ToastContainerProps> = ({ clearAll,toasts, onRemove, ttl = 10000, stackSpacing = 8 }) => {

  const [progress, setProgress] = useState<number>(100)
  const [progressRun, setProgressRun] = useState(true)
  const [currentTime, setCurrentTime] = useState(ttl)

  // for update timer for new toast
  const updateTimerRef = useRef<number>(1);

  const timer = useRef<number>();
  const intervalRef = useRef<number>();
  const removeHandler = useRef(onRemove);

  const resetAll = () => {
    setProgress(100);
    setCurrentTime(ttl)

    // clearTimeout(intervalRef.current)
    // clearTimeout(timer.current);
  }

  useEffect(() => {
    if (toasts.length !== updateTimerRef.current) {
      resetAll();
      updateTimerRef.current = toasts.length
      intervalRef.current = window.setTimeout(() => {

        const timeToRemove = ttl
        const percent = ttl / 100;

        setCurrentTime(timeToRemove > 0 ? timeToRemove : 0)

        if (progressRun && (timeToRemove - percent)>=0) {
          setProgress((timeToRemove - percent) / percent);
        }
      },100)
    }
    if (toasts.length && progressRun) {

      intervalRef.current = window.setTimeout(() => {

        const timeToRemove = ttl * progress / 100
        const percent = ttl / 100;

        setCurrentTime(timeToRemove > 0 ? timeToRemove : 0)

        if (progressRun && (timeToRemove - percent)>=0) {
          setProgress((timeToRemove - percent) / percent);
        }
      },100)
    }


    return () => {
     return  clearTimeout(intervalRef.current)
    }

    // eslint-disable-next-line
  },[progress, currentTime, progressRun,toasts,updateTimerRef.current])

   const handleRemove = useCallback(() => {
     removeHandler.current(toasts[0]?.id)
     setProgress(100)
     setCurrentTime(ttl)
     setProgressRun(true);

     clearTimeout(intervalRef.current)
     clearTimeout(timer.current);
       // eslint-disable-next-line
   }, [toasts, progress, removeHandler]);

  const handleMouseEnter = () => {
    clearTimeout(timer.current);
    setProgressRun(false);


    if (intervalRef.current) {
      clearTimeout(intervalRef.current)
    }

  };

  const handleMouseLeave = () => {
    setProgressRun(true);
    if (timer.current) {
      clearTimeout(timer.current);
    }

    if (intervalRef.current) {
      clearTimeout(intervalRef.current)
    }

    timer.current = window.setTimeout(() => {
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
  }, [handleRemove, currentTime]);

  const clearAllHandler = () => {
    if (clearAll) {
      clearAll();
      setProgressRun(true)
    }
  }

  return (
    <StyledToastContainer>
      <TransitionGroup>
        {toasts.map((toast, index) => {
          const zIndex = (ZINDEX - index).toString();
          const bottom = BOTTOM_POSITION + index * stackSpacing;
          const removeButtonPosition = stackSpacing * toasts.length + 40;
          if (index===0) return <Toast handleRemove={handleRemove}
                           handleMouseEnter={handleMouseEnter}
                           handleMouseLeave={handleMouseLeave}
                           progress={progress}
                           key={toast.id}
                           toast={toast}
                           zIndex={zIndex}
                           ttl={ttl}
                           removeButtonPosition={removeButtonPosition}
                           clearAll={toasts.length > 1 ? clearAllHandler : undefined}
                           style={{ bottom: `${bottom}px`, zIndex }}
            />

          return (
            <Toast
                   key={toast.id}
                   toast={toast}
                   style={{ bottom: `${bottom}px`, zIndex }}
            />
          );
        })}
      </TransitionGroup>
    </StyledToastContainer>
  );
};

export default ToastContainer;
