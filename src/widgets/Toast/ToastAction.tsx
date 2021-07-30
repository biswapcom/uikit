import React from "react";
import { Link } from "react-router-dom";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import { Button } from "../../components/Button";
import { ToastAction as Action } from "./types";
import styled from "styled-components";

interface ToastActionProps {
  actions: Array<Action>;
}

const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const ToastAction: React.FC<ToastActionProps> = ({ actions }) => {
  console.log("actions", actions);
  return (
    <ActionsContainer>
      {
        actions.map(action => {
          if (action.url.startsWith("http")) {
            return (
              <Button as="a" scale="sm" href={action.url} {...getExternalLinkProps()}>
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
