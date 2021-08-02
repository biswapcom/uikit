import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import { Button } from "../../components/Button";
import { ToastAction as Action } from "./types";

// images
// import giftImage from "./shared/gift.png"

interface ToastActionProps {
  actions: Array<Action>;
}

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

// const GiftImage = styled.img`
//   width: 60px;
//   height: 60px;
// `

const ToastAction: React.FC<ToastActionProps> = ({ actions }) => {
  return (
    <ActionsContainer>
      {
        actions.map(action => {
          if (action.url.startsWith("http")) {
            return (
              <Button as="a" scale="sm" href={action.url} {...getExternalLinkProps()}>
                { /* <GiftImage src={giftImage} alt="" /> */ }
                {action.text}
              </Button>
            );
          }

          return (
            <Button as={Link} scale="sm" to={action.url}>
              {action.text}
            </Button>
          );
        })
      }
    </ActionsContainer>
  )
};

export default ToastAction;
