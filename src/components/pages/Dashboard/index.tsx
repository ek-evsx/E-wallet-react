import React from 'react';

import withBaseLayout from 'hocs/withBaseLayout';

import MyProfile from 'components/MyProfile';

import { DashboardContainer } from './styles';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <MyProfile />
    </DashboardContainer>
  );
};

export default withBaseLayout(Dashboard);
