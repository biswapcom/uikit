import React from "react";
import styled from "styled-components";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";
import { SvgProps } from "../../../components/Svg";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border-radius: 8px;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dropDown};
  }
`;

const NavSocial: React.FC = () => (
  <Wrapper>
    {socials.map((social) => {
      const Icon = Icons[social.icon];
      const iconProps = { width: "18px", color: "textSubtle", style: { cursor: "pointer" } };

      return (
        <ItemWrapper>
          <Link external key={social.label} href={social.href} aria-label={social.label}>
            <Icon {...iconProps} />
          </Link>
        </ItemWrapper>
      );
    })}
  </Wrapper>
);

export default NavSocial;
