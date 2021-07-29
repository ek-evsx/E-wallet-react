import React from 'react';
import moment from 'moment';

import DefaultAvatar from 'static/images/default-avatar.jpeg';

import Button from 'components/UI/Button';
import DashboardItemRefetchButton from 'components/DashboardItemRefetchButton';

import useLoader from 'hooks/useLoader';

import { BUTTON_COLOR, DATE_FORMAT } from 'utils/constants';

import { IProfile } from './types';
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

const ALLOWED_USER_FIELDS = ['birthDate', 'city', 'email'];
const USER_FIELDS_LABELS: {
  [key: string]: string;
} = {
  birthDate: 'Birth Date',
  city: 'City',
  email: 'E-mail',
};

interface IProps {
  data: IProfile | undefined;
  isLoading: boolean;
  onRefetch: () => void;
  isRefetching: boolean;
};

const MyProfileCard = (props: IProps) => {
  const { data, isLoading } = props;

  const profileInfo = props.data && ALLOWED_USER_FIELDS.map(field => ({
    label: USER_FIELDS_LABELS[field],
    value: props.data?.[field],
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

  const { Loader, shouldShowLoader } = useLoader({ isLoading, isFullScreen: false, size: 75 });

  const onNavigateProfile = () => console.log('fullName', data?.fullName);

  return (
    <Card>
      <DashboardItemRefetchButton onClick={props.onRefetch} isRefetching={props.isRefetching} />
      <AvatarContainer>
        <Avatar src={data?.avatarUrl || DefaultAvatar} />
      </AvatarContainer>

      <ProfileName>{(!shouldShowLoader && data?.fullName) || 'User Name'}</ProfileName>

      <ProfileInfoContainer>
        {
          shouldShowLoader ? 
            Loader :  
            ProfileInfoComponents
        }
      </ProfileInfoContainer>

      <ViewProfileContainer>
        <Button onClick={onNavigateProfile} text={'View Profile'} color={BUTTON_COLOR.PRIMARY} />          
      </ViewProfileContainer>
    </Card>
  );
};

export default MyProfileCard;
