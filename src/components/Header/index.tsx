import React from 'react';

import LogoutButton from 'components/LogoutButton';

import { Header, LogoutButtonContainer, SidebarButtonContainer } from './styles';

const AppHeader = () => {
  return (
    <Header>
      <SidebarButtonContainer>
      </SidebarButtonContainer>
      <LogoutButtonContainer>
        <LogoutButton />
      </LogoutButtonContainer>
    </Header>
  );
};

export default AppHeader;
