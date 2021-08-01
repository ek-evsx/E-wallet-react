import React from 'react';
import { useHistory } from 'react-router';
import { gql, useMutation, ApolloError } from '@apollo/client';
import { toast } from 'react-toast'

import useLoader from 'hooks/useLoader';

import ResetPasswordForm from 'components/ResetPasswordForm';

import { ROUTES } from 'utils/constants';

import logo from 'static/images/logo.svg';

import { ResetPasswordContainer, Logo } from './styles';

const RESET_PASSWORD = gql`
  mutation resetPassword($email: String!) {
    resetPassword(email: $email) {
      id
    }
  }
`;

const ResetPassword = () => {
  const history = useHistory();

  const onError = (error: string | ApolloError) => toast.error(`Error! Message: ${error}`);

  const [resetPassword, { loading }] = useMutation(RESET_PASSWORD, {
    onError,
  });
  const { Loader, shouldShowLoader } = useLoader({ isLoading: loading, isFullScreen: true, size: 200 });

  const onSubmit = (values: { email: string }) => {
    resetPassword({ variables: { email: values.email } })
      .then((res) => {
        if (res.data && !res.errors) {
          toast.success('Please, check emails. Your password has been successfully reset!');

          setTimeout(() => {
            history.push(ROUTES.login);
          }, 2000);
        }
      });
  };

  return (
    <>
      { shouldShowLoader && Loader}
      <ResetPasswordContainer>
        <Logo alt={'logo'} src={logo} />
        <ResetPasswordForm onSubmit={onSubmit} />
      </ResetPasswordContainer>
    </>

  );
};

export default ResetPassword;
