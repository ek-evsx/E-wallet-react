import React from 'react';

import MyProfile from 'components/MyProfile';

import { DashboardContainer } from './styles';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <MyProfile />
    </DashboardContainer>
  );
};

export default Dashboard;
