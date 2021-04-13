import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";

interface TotalInfoTypes {
  label: string;
  value: number;
}

interface Props {
  total: Array<TotalInfoTypes>;
}

const Item = styled.div`
  position: relative;
`;

const TotalInfo: React.FC<Props> = (props) => {
  const { total } = props;

  return (
    <>
      {total.map((item) => {
        return (
          <Item>
            <Text color="text" fontSize="12px" lineHeight="18px">
              {item.label}
            </Text>
            <Text color="contrast" fontSize="16px" lineHeight="18px" bold>
              ${item.value}
            </Text>
          </Item>
        );
      })}
    </>
  );
};

export default TotalInfo;
