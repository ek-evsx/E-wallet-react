import React from 'react';
import moment from 'moment';
import { gql, useQuery } from '@apollo/client';
import { toast } from 'react-toast'

import DefaultAvatar from 'static/images/default-avatar.jpeg';

import Button from 'components/UI/Button';

import useLoader from 'hooks/useLoader';

import { BUTTON_COLOR, DATE_FORMAT } from 'utils/constants';
import { getParsedJWT } from 'utils/token';

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

interface IQueryData {
  user: IProfile;
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

const GET_ME = gql`
query($id: String!) {
  user(id: $id) {
    id
    fullName
    city
    email
    birthDate
  }
}
`;

const MyProfileCard = () => {
  const parsedToken = getParsedJWT();

  const { data, loading } = useQuery<IQueryData>(GET_ME, {
    variables: { id: parsedToken?.userId || '' },
    onError:  (error) => toast.error(`Error! Message: ${error}`),
  });
  const profileInfo = data?.user && ALLOWED_USER_FIELDS.map(field => ({
    label: USER_FIELDS_LABELS[field],
    value: data?.user[field],
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

  const { Loader, shouldShowLoader } = useLoader({ isLoading: loading, isFullScreen: false, size: 75 });

  const onNavigateProfile = () => console.log('fullName', data?.user?.fullName);

  return (
    <Card>
      <AvatarContainer>
        <Avatar src={data?.user?.avatarUrl || DefaultAvatar} />
      </AvatarContainer>

      <ProfileName>{(!shouldShowLoader && data?.user?.fullName) || 'User Name'}</ProfileName>

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
