import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { formatSpacingAmount } from "../../../util/formatSpacingAmount";
import { HelpIcon } from "../../../components/Svg";

interface TotalInfoTypes {
  label: string;
  value: number;
}

interface Props {
  total: Array<TotalInfoTypes>;
}

const Wrapper = styled.div`
  grid-area: total;
`

const Item = styled.div`
  position: relative;
`;

const TopFlex = styled.div`
  display: flex;
`

const Tooltip = styled.div`
  position: relative;
  margin-left: 12px;
  
  &:hover > div {
    display: block;
  }
`

const TooltipContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2), 0 4px 12px -8px rgba(14, 14, 44, 0.1);
  padding: 8px 16px;
  border-radius: 8px;
  bottom: calc(100% + 12px);
  right: -12px;
  font-size: 14px;
  width: 200px;
  
  &:before {
    content: '';
    display: block;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.colors.card};
    bottom: 0;
    position: absolute;
    -webkit-transform: translate(-12px,9px);
    -ms-transform: translate(-12px,9px);
    transform: translate(-12px,9px);
    right: 0;
  }
`

const TotalInfo: React.FC<Props> = (props) => {
  const { total } = props;

  return (
    <Wrapper>
      {total.map((item, index) => {
        return (
          <Item key={index.toString()}>
            <TopFlex>
              <Text color="text" fontSize="12px" lineHeight="18px">
                {item.label}
              </Text>
              <Tooltip>
                <HelpIcon />
                <TooltipContent>
                  Across all LPs and Launchpools
                </TooltipContent>
              </Tooltip>
            </TopFlex>
            <Text color="contrast" fontSize="16px" lineHeight="18px" bold>
              ${formatSpacingAmount(item.value)}
            </Text>
          </Item>
        );
      })}
    </Wrapper>
  );
};

export default TotalInfo;
