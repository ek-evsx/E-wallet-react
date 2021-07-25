import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { gql, useMutation } from '@apollo/client';
import { Redirect } from 'react-router-dom';

import Button from 'components/UI/Button';
import { BUTTON_SIZE, BUTTON_COLOR, BUTTON_TYPE, ROUTES } from 'utils/constants';
import { saveTokenData, isTokenExpired } from 'utils/token';

import { Input, ErrorMessage, Form, ButtonContainer } from './styles';

const LOGIN = gql`
mutation login($login: String!, $password: String!) {
  login(login: $login, password: $password) {
    accessToken
    expiresIn
  }
}
`;

const LoginForm = () => {
  const [login, { data }] = useMutation(LOGIN);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const onSubmit = (data: any) => login({ variables: data });

  useEffect(() => {
    if (data?.login?.accessToken) {
      saveTokenData(data.login);
  
      setShouldRedirect(true);
    }
  }, [data]);

  if (shouldRedirect || !isTokenExpired()) {
    return <Redirect to={ROUTES.dashboard} />;
  }
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input  {...register("login", { required: true })} placeholder={'Enter login...'} error={errors.login} />
      {errors.login && <ErrorMessage>This field is required</ErrorMessage>}
      <Input {...register("password", { required: true })} placeholder={'Enter password...'} error={errors.password} type={'password'} />
      {errors.password && <ErrorMessage>This field is required</ErrorMessage>}
      
      <ButtonContainer>
        <Button 
          type={BUTTON_TYPE.submit} 
          color={BUTTON_COLOR.SUCCESS} 
          size={BUTTON_SIZE.LARGE}
          text={'Login!'}
        />
      </ButtonContainer>
    </Form>
  );
};

export default LoginForm;
