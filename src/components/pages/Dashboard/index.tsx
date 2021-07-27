import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { toast } from 'react-toast'

import withBaseLayout from 'hocs/withBaseLayout';

import MyProfile from 'components/MyProfile';
import Loader from 'components/Loader';

import { getParsedJWT } from 'utils/token';

import { DashboardContainer } from './styles';

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

const Dashboard = () => {
  const parsedToken = getParsedJWT();

  const { data, loading } = useQuery(GET_ME, {
    variables: { id: parsedToken?.userId || '' },
    onError:  (error) => toast.error(`Error! Message: ${error}`),
  });

  return (
    <DashboardContainer>
      <Loader isFullScreen loading={loading} />
      <MyProfile data={data?.user} />
    </DashboardContainer>
  );
};

export default withBaseLayout(Dashboard);
