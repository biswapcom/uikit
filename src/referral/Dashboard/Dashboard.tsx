import React from "react";
import styled from "styled-components";
import {IDashboardItem} from './types';

// styled components
import StyledDashboard from "./StyledDashboard";
import Logo from "../../components/Svg/Icons/Logo";
import {Text} from '../../components/Text'
import {InviterField} from '../../components/InviterField'

interface IDashboardProps {
    data: Array<IDashboardItem>,
    totalData: Array<IDashboardItem>
}

const MainDashboardBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #071C3C;
  width: 50%;
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 84px;
  border-radius: 16px;
`
const MainDashboardBlockRow = styled.div`
  display: flex;
  align-content: center;
`

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 22px;
`

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const DashboardInfoRow = styled.div`
  &:nth-child(2n) {
    margin-top: 20px;
    //margin-top: 20px;
  }
  &:nth-child(3)::after,
  &:nth-child(5)::after {
    content: " ";
    display: block;
    position: absolute;
    height: 103px;
    width: 2px;
    background: #708DB7;
    top: calc(23% - 2px);
    margin-left: -40px;
    opacity: 0.08;
  }
`
const DashboardInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  height: 140px;
  margin-left: 64px;
`

const Dashboard= ({data,totalData}:IDashboardProps): JSX.Element => {
  return (
    <StyledDashboard>
      <HeaderRow>
        <Text fontSize="24px" color='#fff'>Dashboard</Text>
        <InviterField />
      </HeaderRow>
      <DashboardWrapper>
        <MainDashboardBlock>
          <MainDashboardBlockRow>
            <img  src={require('../../assets/Friends.png')} style={{width: 40, height: 40,marginTop: 8}} alt="" />
            <div>
              <Text fontSize="12px"
                    fontWeight="700"
                    color='#749BD8'
                    ml={16}>{totalData[0].title}</Text>
              <Text
                fontSize="24px"
                color='#fff'
                ml={16}>{totalData[0].value}
              </Text>
            </div>
          </MainDashboardBlockRow>
          <MainDashboardBlockRow>
            <div>
              <Logo mt={2} width='40px'/>
            </div>
            <div>
              <Text
                ml={16}
                fontSize="12px"
                fontWeight="700"
                color='#749BD8'
              >
                {totalData[1].title}
              </Text>
              <Text
                ml={16}
                fontSize="24px"
                color='#fff'
              >
                {totalData[1].value}
              </Text>
            </div>
          </MainDashboardBlockRow>
        </MainDashboardBlock>
        <DashboardInfoContainer>
          {data.map(item => (
              <DashboardInfoRow key={item.id}>
                <Text
                  fontSize="12px"
                  color='#749BD8'
                  fontWeight='700'
                >
                  {item.title}
                </Text>
                <Text
                  fontSize="18px"
                  color="#fff"
                  fontWeight="800"
                >
                  {item.value}
                </Text>
              </DashboardInfoRow>
          ))}
        </DashboardInfoContainer>

      </DashboardWrapper>
    </StyledDashboard>
  );
};

export default Dashboard;