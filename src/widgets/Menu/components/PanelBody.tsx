import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, LinkStatus } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div<{ isPushed: boolean }>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  //height: 100%;
  flex-grow: 1;
  padding: ${({ isPushed }) => (isPushed ? "0 16px" : "0 12px")};
  transition: padding-left 0.4s, padding-right 0.4s;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const CompetitionCycle = styled.span<{cycleType: string}>`
  position: absolute;
  left: 28px;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  display: inline-block;
  background-color: ${({theme,cycleType})=> (cycleType === 'active' ? theme.colors.success : theme.colors.text)}
`

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
          // console.log('enytt', entry.items);
          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              status={entry.status}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some((item) => item.href === location.pathname)}
            >
              {isPushed &&
                entry.items.map((item) => {
                  // console.log('fdvfd',item.cycleType);
                  return(
                    <MenuEntry isSmall key={item.href} secondary isActive={item.href === location.pathname} onClick={handleClick}>
                      <>
                        {
                          item.cycleType ? (
                            <>
                              <CompetitionCycle cycleType={item.cycleType}/>
                            </>

                          ): null
                        }
                        <MenuLink href={item.href} target={item.target ? item.target : '_self'}>{item.label}</MenuLink>
                      </>
                    </MenuEntry>
                  )
                })}
            </Accordion>
          );
        }
        return (
          // <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
          //   <MenuLink href={entry.href} onClick={handleClick}>
          //     {iconElement}
          //     <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
          //     {entry.status && (
          //       <LinkStatus color={entry.status.color} fontSize="14px">
          //         {entry.status.text}
          //       </LinkStatus>
          //     )}
          //   </MenuLink>
          // </MenuEntry>
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              {entry.secondLabel ? (
                  <LinkLabel isPushed={isPushed}>{entry.label}
                    {
                      isPushed && (
                        <span style={{color:'#FFDB1C'}} className={entry.secondCalloutClass}>
                      {entry.secondTextLabel}
                    </span>
                      )
                    }
                    {entry.status && (
                      <LinkStatus color={entry.status.color} fontSize="14px">
                        {entry.status.text}
                      </LinkStatus>
                    )}
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
