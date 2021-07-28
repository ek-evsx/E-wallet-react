import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SidebarHeader } from 'react-pro-sidebar';

import { ReactComponent as Logo } from 'static/images/logo_transp.svg';
import { ReactComponent as LongArrowRight } from 'static/images/icons/long-arrow-alt-right-solid.svg';

import menuLinks from './menuLinks';
import { 
  SidebarContainer, 
  SidebarHeaderContainer, 
  LogoContainer, 
  MenuItemsContainer, 
  MenuSectionTitle, 
  IconContainer, 
  LinkContainer, 
  LinkText, 
  ArrowIconContainer 
} from './styles';

import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onLogoClick = () => setIsCollapsed((prevValue) => !prevValue);

  //@ts-ignore
  const links = Object.keys(menuLinks as Array<{
    title: string;
    links: Array<{
      to: string;
      Icon: any;
      label: string;
    }>;
  }>).map(section => {
      //@ts-ignore
    const sectionLinks = menuLinks[section].links.map(({ to, label, Icon }) => (
      <MenuItem>
        <LinkContainer>
          <Link to={to}>
            <LinkContainer>
              <IconContainer><Icon /></IconContainer>
              {
                isCollapsed ?
                <ArrowIconContainer><LongArrowRight /></ArrowIconContainer> :
                <LinkText>{label}</LinkText>
              }
            </LinkContainer>
          </Link>
        </LinkContainer>
      </MenuItem>
    ));

    return (
      <>
          {/* @ts-ignore */}
        <MenuSectionTitle>{menuLinks[section].title}</MenuSectionTitle>
        <MenuItemsContainer>{sectionLinks}</MenuItemsContainer>
      </>
    );
  });

  return (
    <SidebarContainer>
      <SidebarHeaderContainer>
      <SidebarHeader>
        <LogoContainer onClick={onLogoClick}>
          <Logo />
        </LogoContainer>
      </SidebarHeader>
      </SidebarHeaderContainer>

      <ProSidebar
        collapsed={isCollapsed}
        toggled={true}
        breakPoint="md"
      >
        <Menu iconShape="square">
          {links}
        </Menu>
      </ProSidebar>
    </SidebarContainer>
  );
};

export default Sidebar;
