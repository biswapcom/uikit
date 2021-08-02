import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { TelegramShareButton, TwitterShareButton } from 'react-share';

// import getExternalLinkProps from "../../util/getExternalLinkProps";
import { Button } from "../../components/Button";
import { ToastAction as Action } from "./types";
import { TelegramIcon, TwitterIcon } from "../../components/Svg";
import { Text } from "../../components/Text";

interface ToastActionProps {
  // actions: Array<Action>;
  title?: string,
  url?: string
}

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const ToastAction: React.FC<ToastActionProps> = ({title, url}) => {

  return (
    <ActionsContainer>
      <TelegramShareButton style={{ width:'45%'}}  title={title}
                           url='Biswap'
      >
        <Button width='100%' style={{backgroundColor: '#16CDFD'}}>
          <Text color='contrast' fontSize='12px' bold lineHeight='18px'>Retweet</Text>
          <TwitterIcon  color="#fff" mr="7px" width="20px" />
        </Button>
      </TelegramShareButton>
      <TwitterShareButton style={{ width:'45%'}} title={title}
                          url='Biswap'
      >
        <Button width='100%' style={{backgroundColor: '#26A6E5'}}>
          <Text color='contrast' fontSize='12px' bold lineHeight='18px'>Telegram</Text>
          <TelegramIcon  color="#fff" mr="7px" width="20px" />
        </Button>
      </TwitterShareButton>
    </ActionsContainer>
  )
};

export default ToastAction;
