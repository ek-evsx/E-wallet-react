import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SidebarHeader } from 'react-pro-sidebar';

import { ReactComponent as Logo } from 'static/images/logo_transp.svg';

import { SidebarContainer, SidebarHeaderContainer, LogoContainer } from './styles';

import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onLogoClick = () => setIsCollapsed((prevValue) => !prevValue);

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
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Dashboard 2</MenuItem>
        </Menu>
      </ProSidebar>
    </SidebarContainer>
  );
};

export default Sidebar;
