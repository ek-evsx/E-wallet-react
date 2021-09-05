import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from 'components/UI/Button';
import { IFormData, ISignUpData } from 'components/pages/SignUp/types';
import AvatarUpload from 'components/AvatarUpload';

import { BUTTON_SIZE, BUTTON_COLOR, BUTTON_TYPE, ROUTES } from 'utils/constants';

import { 
  Input, 
  ErrorMessage, 
  Form, 
  ButtonContainer, 
  LinksContainer, 
  DatePickerInput, 
  DatePickerContainer,
} from './styles';

interface IProps {
  onSubmit: (data: ISignUpData) => void;
};

const SignUpForm = (props: IProps) => {
  const { register, setValue, control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: IFormData) => {
    const { verifyPassword, ...signupData } = data;

    if (signupData.password === verifyPassword) {
      props.onSubmit({
        ...signupData,
        avatar: signupData.avatar ? signupData.avatar[0] : null,
      });
    }

  };
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <AvatarUpload 
        setValue={setValue}
        register={register("avatar")}
      />

      <Input  {...register("firstName", { required: true })} placeholder={'Enter first name...'} error={errors.firstName} />
      {errors.firstName && <ErrorMessage>This field is required</ErrorMessage>}

      <Input {...register("lastName", { required: true })} placeholder={'Enter last name...'} error={errors.lastName} />
      {errors.lastName && <ErrorMessage>This field is required</ErrorMessage>}

      <Input  {...register("email", { required: true })} placeholder={'Enter email...'} error={errors.email} />
      {errors.email && <ErrorMessage>This field is required</ErrorMessage>}

      <Input  {...register("login", { required: true })} placeholder={'Enter login...'} error={errors.login} />
      {errors.login && <ErrorMessage>This field is required</ErrorMessage>}

      <Input {...register("city", { required: true })} placeholder={'Enter city...'} error={errors.city} />
      {errors.city && <ErrorMessage>This field is required</ErrorMessage>}

      <DatePickerContainer>
        <Controller
          control={control}
          name='birthDate'
          render={({ field }) => (
            <DatePickerInput
              placeholderText='Select birth date'
              onChange={(date: Date) => field.onChange(date)}
              selected={field.value}
              error={errors.birthDate}
              // @ts-ignore 
              maxDate={Date.now()}
            />
          )}
        />
        {errors.birthDate && <ErrorMessage>This field is required</ErrorMessage>}
      </DatePickerContainer>

      <Input  {...register("password", { required: true })} placeholder={'Enter password...'} error={errors.password} type={'password'} />
      {errors.password && <ErrorMessage>This field is required</ErrorMessage>}

      <Input {...register("verifyPassword", { required: true })} placeholder={'Enter verifyPassword...'} error={errors.verifyPassword} type={'password'} />
      {errors.verifyPassword && <ErrorMessage>This field is required</ErrorMessage>}
      
      <ButtonContainer>
        <Button 
          type={BUTTON_TYPE.submit} 
          color={BUTTON_COLOR.SUCCESS} 
          size={BUTTON_SIZE.LARGE}
          text={'Sign Up!'}
        />
      </ButtonContainer>
      <LinksContainer>
        <Link to={ROUTES.login}>Go back</Link>
      </LinksContainer>
    </Form>
  );
};

export default SignUpForm;
