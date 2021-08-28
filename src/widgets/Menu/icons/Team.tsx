import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.57232 13.9999C8.57232 12.7376 9.59567 11.7142 10.858 11.7142H13.1438C14.4061 11.7142 15.4295 12.7376 15.4295 13.9999V16.2856H8.57232V13.9999ZM18.0004 12.857H16.5719V16.2856H20.0004V14.857C20.0004 13.7525 19.105 12.857 18.0004 12.857ZM4 14.857C4 13.7525 4.89543 12.857 6 12.857H7.42857V16.2856H4V14.857ZM11.9991 10.5714C13.2615 10.5714 14.2848 9.54801 14.2848 8.28564C14.2848 7.02328 13.2615 5.99993 11.9991 5.99993C10.7367 5.99993 9.71339 7.02328 9.71339 8.28564C9.71339 9.54801 10.7367 10.5714 11.9991 10.5714ZM18.8574 9.99987C18.8574 10.9466 18.0899 11.7142 17.1431 11.7142C16.1963 11.7142 15.4288 10.9466 15.4288 9.99987C15.4288 9.0531 16.1963 8.28559 17.1431 8.28559C18.0899 8.28559 18.8574 9.0531 18.8574 9.99987ZM6.85686 11.7142C7.80364 11.7142 8.57115 10.9467 8.57115 9.9999C8.57115 9.05312 7.80364 8.28561 6.85686 8.28561C5.91009 8.28561 5.14258 9.05312 5.14258 9.9999C5.14258 10.9467 5.91009 11.7142 6.85686 11.7142Z"/>
    </Svg>
  );
};

export default Icon;