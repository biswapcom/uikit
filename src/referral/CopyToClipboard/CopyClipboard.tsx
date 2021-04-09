import React, { FC,useState } from "react";
import styled from "styled-components";

import {CopyToClipboard} from 'react-copy-to-clipboard';

import Copy from "../../components/Svg/Icons/Copy";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #0E3382;
  padding: 8px 8px 8px 16px;
  
  .input {
    border: none;
    font-size: 14px;
    color: #fff;
    width: 100%;
    background-color: transparent;
  }
`
const CopyButton = styled.div`
  border-radius: 8px;
  padding: 8px;
  background-color: #1263F1;
  justify-content: center;
  align-items: center;
`

type CopyToClipboardProps = {
  value: string
}

const CopyClipboard:FC<CopyToClipboardProps> = ({value}):JSX.Element => {
  const [copied, setCopied] = useState<boolean>(false)
  return (
    <Container>
      <input className='input' value={value} onChange={()=>setCopied(false)} disabled />
      <CopyToClipboard text={value}
                       onCopy={() => setCopied(true)}>

        <CopyButton>
          <Copy width={24}
                color="#fff"
          />
        </CopyButton>
      </CopyToClipboard>
    </Container>
  );
};

export default CopyClipboard;