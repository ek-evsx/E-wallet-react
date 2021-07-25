import React from 'react';
import { gql, useQuery } from '@apollo/client';

import MyProfile from 'components/MyProfile';

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

  const { data } = useQuery(GET_ME, {
    variables: { id: parsedToken?.userId || '' }
  });

  return (
    <DashboardContainer>
      <MyProfile data={data?.user} />
    </DashboardContainer>
  );
};

export default Dashboard;
