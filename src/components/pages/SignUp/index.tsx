import React from 'react';
import { useHistory } from 'react-router';
import { gql, useMutation, ApolloError } from '@apollo/client';
import { toast } from 'react-toast'

import useLoader from 'hooks/useLoader';

import { ROUTES } from 'utils/constants';

import SignUpForm from 'components/SignUpForm';

import logo from 'static/images/logo.svg';

import { SignUpContainer, Logo, SignUpFormContainer } from './styles';
import { ISignUpData } from './types';

const SIGN_UP = gql`
  mutation signup($userData: CreateUserInput) {
    signup(userData: $userData) {
      id
    }
  }
`;

const SignUpPage = () => {
  const history = useHistory();

  const onError = (error: string | ApolloError) => toast.error(`Error! Message: ${error}`);

  const [signUp, { loading }] = useMutation(SIGN_UP, {
    onError,
  });

  const { Loader, shouldShowLoader } = useLoader({ isLoading: loading, isFullScreen: true, size: 200 });

  const onSubmit = (data: ISignUpData) => {
    signUp({ variables: { userData: data } })
      .then((res) => {
        if (res.data && !res.errors) {
          toast.success('Please, check emails. You have been successfully registered!');

          setTimeout(() => {
            history.push(ROUTES.login);
          }, 2000);
        }
      });
  };

  return (
    <>
      { shouldShowLoader && Loader}
      <SignUpContainer>
        <Logo alt={'logo'} src={logo} />
        <SignUpFormContainer>
          <SignUpForm onSubmit={onSubmit} />
        </SignUpFormContainer>
      </SignUpContainer>
    </>
  );
};

export default SignUpPage;
