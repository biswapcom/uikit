import React, {FC} from "react";
/* eslint-disable import/no-unresolved */
import {Meta} from "@storybook/react/types-6-0";

// components
import Dashboard from "./Dashboard";
import {data,totalData} from './exampleData'

export default {
  title: 'Referral/Dashboard',
  component: Dashboard,
  argTypes: {}
} as Meta;


export const Default: FC = (): JSX.Element => {
  return (
    <div style={{width:1120}}>
      <Dashboard data={data} totalData={totalData}/>
    </div>
  )
}