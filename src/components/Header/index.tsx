import React from 'react';
import { useHistory } from 'react-router-dom';

import LogoutButton from 'components/LogoutButton';

import { ReactComponent as Logo } from 'static/images/logo_transp.svg';
import { ROUTES } from 'utils/constants';

import { Header, LogoutButtonContainer, LogoContainer } from './styles';

const AppHeader = () => {
  const history = useHistory();

  const onLogoClick = () => history.push(ROUTES.dashboard);

  return (
    <Header>
      <LogoContainer onClick={onLogoClick}>
        <Logo />
      </LogoContainer>
      <LogoutButtonContainer>
        <LogoutButton />
      </LogoutButtonContainer>
    </Header>
  );
};

export default AppHeader;
