import React, { FC } from "react";
import styled from "styled-components";

// custom components
import {Text} from '../../components/Text'
import StyledLinkCard from './StyledLinkCard'
import Add from "../../components/Svg/Icons/Add";
import {CopyToClipboard} from '../CopyToClipboard'

import {LinkPercentItem} from './types'
import Pen from "../../components/Svg/Icons/Pen";

const HeaderRow  = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`

// const CopyLinkRow = styled.div`
//
// `

const HeaderAddButton  = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const CycleAddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
  background-color: #fff;
  border-radius: 50%;
`

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  //flex-wrap: wrap;
  margin-top: 16px;
`

const BottomRowItem = styled.div`
  display: flex;
  flex-direction: column;
`

const NoteBlock = styled.div`
  display: flex;
  flex-direction: column;
  &:after {
    content: " ";
    display: block;
    position: absolute;
    height: 56px;
    width: 2px;
    background: #708DB7;
    top: calc(35% - 2px);
    margin-left: -40px;
    opacity: 0.24;
  }
`

type LinkCardProps = {
  data:Array<LinkPercentItem>,
  ReferralLink: string
}

const LinkCard:FC<LinkCardProps> = ({data,ReferralLink}): JSX.Element => {
  return (
    <StyledLinkCard>
      <HeaderRow>
        <Text
          fontSize="24px"
          color="#fff">
          My Referral link
        </Text>
        <HeaderAddButton>
          <Text
          fontSize="14px"
          color='#fff'
          >
            Create new link
          </Text>
          <CycleAddButton onClick={()=>alert('modal!')}>
            <Add width={16} color='#1263F1'/>
          </CycleAddButton>
        </HeaderAddButton>
      </HeaderRow>
      <CopyToClipboard value={ReferralLink} />
      <BottomRow>
        {
          data.map(item => (
            <BottomRowItem key={item.id}>
                <Text
                  fontSize="12px"
                  color='#fff'>
                  {item.title}
               </Text>
              <Text
              fontSize="32px"
              fontWeight="600"
              color="#FFDB1C"
              >
                {item.value}
              </Text>
            </BottomRowItem>
          ))
        }
        <NoteBlock>
          <div style={{display: "flex"}} onClick={()=>alert('Modal')}>
            <div>
              <Pen width={24} color="black" />
            </div>
            <Text
              fontSize="12px"
              color='#fff'>
              Note
            </Text>
          </div>
          <div>
            <Text fontSize="12px" color='#fff'>
              Текст для рекламы <br/> в Facebook black...
            </Text>
          </div>
        </NoteBlock>
      </BottomRow>

    </StyledLinkCard>
  );
};

export default LinkCard;