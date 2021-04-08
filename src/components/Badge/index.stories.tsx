import React,{FC} from "react";
import Badge from "./Badge";

export default {
  title: 'components/Badge',
  component: Badge,
  argTypes: {}
}

export const Default:FC = () => {
  return (
    <div style={{width: 100}}>
      <Badge/>
    </div>
  )
}