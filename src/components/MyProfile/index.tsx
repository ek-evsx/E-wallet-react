import React from 'react';
import moment from 'moment';

import DefaultAvatar from 'static/images/default-avatar.jpeg';
import Button from 'components/UI/Button';
import { BUTTON_COLOR, DATE_FORMAT } from 'utils/constants';

import { 
  Card, 
  ProfileName, 
  Avatar, 
  ProfileInfoContainer, 
  ProfileInfoField, 
  AvatarContainer,
  ViewProfileContainer, 
  ProfileInfoFieldLabel,
  ProfileInfoFieldValue,
} from './styles';

interface IProfile {
  fullName: string;
  avatarUrl: string;
  email: string;
  [key: string]: string | number;
};

interface IProps {
  data: IProfile;
};

const ALLOWED_USER_FIELDS = ['fullName', 'birthDate', 'city', 'email'];
const USER_FIELDS_LABELS: {
  [key: string]: string;
} = {
  fullName: 'Full Name',
  birthDate: 'Birth Date',
  city: 'City',
  email: 'E-mail',
};

const MyProfileCard = (props: IProps) => {
  const { data: user } = props;
  const profileInfo = user && ALLOWED_USER_FIELDS.map(field => ({
    label: USER_FIELDS_LABELS[field],
    value: user[field],
  }))

  const ProfileInfoComponents = profileInfo?.map(profileInfoField => {
    const infoField = { ...profileInfoField };

    if (infoField.label.toLowerCase().includes('date')) {
      infoField.value = moment(infoField.value).format(DATE_FORMAT);
    }

    return (
      <ProfileInfoField key={infoField.label}>
        <ProfileInfoFieldLabel>{infoField.label}:</ProfileInfoFieldLabel> 
        <ProfileInfoFieldValue>{infoField.value}</ProfileInfoFieldValue>
      </ProfileInfoField>
    );
  });

  const onNavigateProfile = () => console.log('fullName', user.fullName);

  return (
    <Card>
      <AvatarContainer>
        <Avatar src={user?.avatarUrl || DefaultAvatar} />
      </AvatarContainer>

      <ProfileName>{user?.fullName}</ProfileName>
      
      <ProfileInfoContainer>
        {ProfileInfoComponents}
      </ProfileInfoContainer>

      <ViewProfileContainer>
        <Button onClick={onNavigateProfile} text={'View Profile'} color={BUTTON_COLOR.PRIMARY} />          
      </ViewProfileContainer>
    </Card>
  );
};

export default MyProfileCard;
