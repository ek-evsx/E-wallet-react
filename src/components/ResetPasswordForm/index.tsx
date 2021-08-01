import React from 'react';
import { useForm } from 'react-hook-form';

import Button from 'components/UI/Button';
import { BUTTON_SIZE, BUTTON_COLOR, BUTTON_TYPE } from 'utils/constants';

import { Input, ErrorMessage, Form, ButtonContainer } from './styles';

interface IFormData {
  email: string;
};

interface IProps {
  onSubmit: (values: IFormData) => void;
};

const ResetPasswordForm = (props: IProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: IFormData) => props.onSubmit(data);
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input  {...register("email", { required: true })} placeholder={'Enter email...'} error={errors.email} />
      {errors.email && <ErrorMessage>This field is required</ErrorMessage>}
      
      <ButtonContainer>
        <Button 
          type={BUTTON_TYPE.submit} 
          color={BUTTON_COLOR.SUCCESS} 
          size={BUTTON_SIZE.LARGE}
          text={'Reset!'}
        />
      </ButtonContainer>
    </Form>
  );
};

export default ResetPasswordForm;
