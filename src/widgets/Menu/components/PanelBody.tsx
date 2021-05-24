import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";
import { LoaderIcon } from "../icons";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const LoaderAnimation = styled(LoaderIcon)`
  @keyframes loader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  animation: loader 2s linear infinite;
`

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div<{ isPushed: boolean }>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  padding: ${({ isPushed }) => (isPushed ? "0 16px" : "0 12px")};
  transition: padding-left 0.4s, padding-right 0.4s;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const PanelBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;
  return (
    <Container isPushed={isPushed}>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="24px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some((item) => item.href === location.pathname)}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry isSmall key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                    <MenuLink href={item.href} target="_blank">{item.label}</MenuLink>
                    { item.ico &&
                    // <LoaderIcon width="16px" />
                      <LoaderAnimation width="16px"/>
                    }
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              {entry.secondLabel ? (
                  <LinkLabel isPushed={isPushed}>{entry.label}
                    <span style={{color:'#FFB237'}} className={entry.secondCalloutClass}>
                      {entry.secondTextLabel}
                    </span>
                  </LinkLabel>
              ): (
                  <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
              )}
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
}

export default PanelBody;
