import React from "react";
import styled from "styled-components";
import AuditIcon from "../icons/AuditIcon";

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  margin-right: 32px;
`

const Label = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.contrast};
`

const AuditInfo: React.FC = () => {
  return (
    <Wrapper href='https://www.certik.org/projects/biswap' target="_blank">
      <AuditIcon color="success" mr="7px"/>
      <Label>Certik Audit</Label>
    </Wrapper>
  )
}

export default AuditInfo