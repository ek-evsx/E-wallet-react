import React from 'react';
import { gql, useQuery, NetworkStatus } from '@apollo/client';
import { toast } from 'react-toast'

import withBaseLayout from 'hocs/withBaseLayout';

import MyProfile from 'components/MyProfile';
import { IProfile } from 'components/MyProfile/types';
import Button from 'components/UI/Button';

import { getParsedJWT } from 'utils/token';
import { BUTTON_COLOR } from 'utils/constants';

import { ReactComponent as RefreshIcon } from 'static/images/icons/refresh.svg';

import { DashboardContainer, RefreshButtonText, RefreshButtonContent, RefreshButtonContainer } from './styles';

const GET_ME = gql`
query getMe($id: String!) {
  user(id: $id) {
    id
    fullName
    city
    email
    birthDate
    avatarUrl
  }
}
`;

interface IQueryData {
  user: IProfile;
};

const Dashboard = () => {
  const parsedToken = getParsedJWT();
  const profileDataVariables = { id: parsedToken?.userId || '' };

  const { data: profileData, loading, refetch: refetchProfileData, networkStatus: profileNetworkStatus } = useQuery<IQueryData>(GET_ME, {
    variables: profileDataVariables,
    notifyOnNetworkStatusChange: true,
    onError:  (error) => toast.error(`Error! Message: ${error}`),
  });

  const onRefresh = () => {
    refetchProfileData(profileDataVariables);
  };


  const onRefetchProfileData = () => refetchProfileData(profileDataVariables);

  return (
    <DashboardContainer>
      <RefreshButtonContainer>
        <Button 
          onClick={onRefresh} 
          color={BUTTON_COLOR.PRIMARY} 
        >
          <RefreshButtonContent>
            <RefreshIcon />
            <RefreshButtonText>Refresh</RefreshButtonText>
          </RefreshButtonContent>
        </Button>
      </RefreshButtonContainer>
      <MyProfile 
        data={profileData?.user} 
        isLoading={profileNetworkStatus === NetworkStatus.refetch || loading} 
        onRefetch={onRefetchProfileData}
        isRefetching={profileNetworkStatus === NetworkStatus.refetch}
      />
    </DashboardContainer>
  );
};

export default withBaseLayout(Dashboard);
