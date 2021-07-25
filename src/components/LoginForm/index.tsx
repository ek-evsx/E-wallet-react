import React from 'react';
import { useForm } from 'react-hook-form';

import Button from 'components/UI/Button';
import { BUTTON_SIZE, BUTTON_COLOR, BUTTON_TYPE } from 'utils/constants';

import { Input, ErrorMessage, Form, ButtonContainer } from './styles';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input  {...register("login", { required: true })} placeholder={'Enter login...'} error={errors.login} />
      {errors.login && <ErrorMessage>This field is required</ErrorMessage>}
      <Input {...register("password", { required: true })} placeholder={'Enter password...'} error={errors.password} />
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
