import React, { useState } from 'react';
import { UseFormSetValue, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

import DefaultAvatar from 'static/images/default-avatar.jpeg';

import { Avatar, FileUpload, Controller } from './styles';

interface IProps {
  setValue: UseFormSetValue<FieldValues>;
  register: UseFormRegisterReturn;
  src?: string;
};

const AvatarUpload = (props: IProps) => {
  const [avatar, setAvatar] = useState<any>(props.src || null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
		const reader = new FileReader();
    const file = e?.target?.files ? e.target.files[0] : null;

    if (file) {
      reader.onloadend = () => {
          setAvatar(reader?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Controller>
      <FileUpload type={'file'} {...props.register} onChange={onChange} />
      <Avatar src={avatar || DefaultAvatar} alt={'Profile avatar'} />
    </Controller>
  );
};

export default AvatarUpload;
