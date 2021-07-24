import React from 'react';

import DefaultAvatar from 'static/images/default-avatar.jpeg';

interface IProps {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void,
  avatarUrl: string,
};

const AvatarUpload = (props: IProps) => {
  return (
    <input type={'file'} onChange={props.onChange}>
      <img src={props.avatarUrl || DefaultAvatar} alt={'Profile avatar'} />
    </input>
  );
};

export default AvatarUpload;
