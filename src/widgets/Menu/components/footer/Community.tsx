import React from "react";
import styled from "styled-components";
import { socials } from "../../config";
import { SvgProps } from "../../../../components/Svg";
import Link from "../../../../components/Link/Link";
import * as IconModule from "../../icons";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Wrapper = styled.div`
  grid-area: community;
  margin-top: 8px;
  
  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 24px;
  }
  
  ${({ theme }) => theme.mediaQueries.xll} {
    margin-top: 0;
  }
`

const Title = styled.h4`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.contrast};
  margin-bottom: 16px;
`

const SocialWrap = styled.div`
  display: flex;
  margin: 0 -4px;
`

const SocialItem = styled.a`
  width: 20px;
  height: 20px;
  margin: 0 4px;
`

const Community: React.FC = () => {
  return (
    <Wrapper>
      <Title>Community</Title>

      <SocialWrap>
        {socials.map((social) => {
          const Icon = Icons[social.icon];
          const iconProps = { width: "20px", color: "textSubtle", style: { cursor: "pointer" } };
          if (social.items) {
            return (
              <SocialItem key={social.items[1].label}>
                <Link external href={social.items[1].href} aria-label={social.items[1].label}>
                  <Icon {...iconProps} />
                </Link>
              </SocialItem>
            )
          }
          return (
            <SocialItem key={social.label}>
              <Link external href={social.href} aria-label={social.label}>
                <Icon {...iconProps} />
              </Link>
            </SocialItem>
          )
        })}
      </SocialWrap>
    </Wrapper>
  )
}

export default Community;