import React from 'react';

import AppMenu from 'components/Menu';

import { Footer, MenuContainer } from './styles';

const AppFooter = () => {
  return (
    <Footer>
      <MenuContainer>
        <AppMenu />
      </MenuContainer>
    </Footer>
  );
};

export default AppFooter;
