import React from 'react';

import LoginForm from 'components/LoginForm';

import logo from 'static/images/logo.svg';

import { LoginContainer, Logo, LoginFormContainer } from './styles';

const LoginPage = () => {
  return (
    <LoginContainer>
      <Logo alt={'logo'} src={logo} />
      <LoginFormContainer>
        <LoginForm />
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default LoginPage;
