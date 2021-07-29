import React from 'react';

import { ReactComponent as RefreshIcon } from 'static/images/icons/refresh.svg';

import { RefetchButton } from './styles';

interface IProps {
  onClick: () => void;
  isRefetching: boolean;
};

const DashboardItemRefetchButton = (props: IProps) => {
  return (
    <RefetchButton 
      onClick={props.onClick}
      isRefetching={props.isRefetching}
    >
      <RefreshIcon />
    </RefetchButton>
  );
};

export default DashboardItemRefetchButton;
