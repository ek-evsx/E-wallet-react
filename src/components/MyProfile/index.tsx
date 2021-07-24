import React from 'react';

import DefaultAvatar from 'static/images/default-avatar.jpeg';
import Button from 'components/UI/Button';
import { BUTTON_COLOR } from 'utils/constants';

import { 
  Card, 
  ProfileName, 
  Avatar, 
  ProfileInfoContainer, 
  ProfileInfoField, 
  AvatarContainer,
  ViewProfileContainer, 
} from './styles';

const mockProfile = {
  fullName: 'Test1 Test2',
  avatarUrl: '',
  email: 'test@gmail.com',
};

interface IMockProfile {
  fullName: string;
  avatarUrl: string;
  email: string;
  [key: string]: string;
};

const MyProfileCard = () => {
  const { avatarUrl, fullName, ...profileInfo }: IMockProfile  = mockProfile;

  const ProfileInfo = Object.keys(profileInfo).map(key => (<ProfileInfoField>{key}: {profileInfo[key]}</ProfileInfoField>))

  const onNavigateProfile = () => console.log('fullName', fullName);

  return (
    <Card>
      <AvatarContainer>
        <Avatar src={avatarUrl || DefaultAvatar} />
      </AvatarContainer>

      <ProfileName>{fullName}</ProfileName>
      
      <ProfileInfoContainer>
        {ProfileInfo}
      </ProfileInfoContainer>

      <ViewProfileContainer>
        <Button onClick={onNavigateProfile} text={'View Profile'} color={BUTTON_COLOR.PRIMARY} />          
      </ViewProfileContainer>
    </Card>
  );
};

export default MyProfileCard;
