import React from "react";
import styled from "styled-components";
import { TelegramShareButton, TwitterShareButton } from 'react-share';
import { Button } from "../../components/Button";
import { TelegramIcon, TwitterIcon } from "../../components/Svg";
import { Text } from "../../components/Text";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import giftImg from "./shared/gift.png"

interface ToastActionProps {
  title?: string;
  url?: string;
  telegramDescription: string;
  tweeterDescription: string;
}

const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`
const StyledIcon = styled.img`
  width: 26px;
  filter: drop-shadow(2px 4px 8px rgba(0, 109, 163, 0.4));
`

const ToastAction: React.FC<ToastActionProps> = ({title, telegramDescription, tweeterDescription}) => {

  return (
    <ActionsContainer>
      <TwitterShareButton style={{ width:'35%'}}  title={tweeterDescription}
                           url='https://biswap.org/'
      >
        <Button scale="sm" width='100%' style={{backgroundColor: '#16CDFD', alignItems: "center"}}>
          <StyledIcon src={giftImg} alt="gift-icon"/>
          <Text color='#fff' fontSize='12px' bold>Retweet</Text>
          <TwitterIcon mr="7px" color="#fff" width="20px" />
        </Button>
      </TwitterShareButton>
      <TelegramShareButton style={{ width:'35%', marginLeft: "10px", alignItems: "center"}} title={telegramDescription}
                          url='https://biswap.org/'
      >
        <Button scale="sm" width='100%' style={{backgroundColor: '#26A6E5'}}>
          <StyledIcon src={giftImg} alt="gift-icon"/>
          <Text color='#fff' fontSize='12px' bold>Telegram</Text>
          <TelegramIcon mr="8px" color="#fff" width="20px" />
        </Button>
      </TelegramShareButton>
    </ActionsContainer>
  )
};

export default ToastAction;
