import React from 'react';

import { LoaderContainer, LoaderSizeContainer } from './styles';
import './styles.css';

interface IProps {
  size?: number;
  isFullScreen?: boolean;
  loading?: boolean;
};

interface ILoaderProps {
  size?: number;
};

const Loader = ({ size = 200 }: ILoaderProps) => (
  <LoaderSizeContainer size={size}>
    <div className="loadingio-spinner-rolling-mz3ix71ams9">
      <div className="ldio-zst66qr2z9c">
        <div style={{ border: `${Math.round(size / 10)}px solid #74007a`, borderTopColor: 'transparent' }}></div>
      </div>
    </div>
  </LoaderSizeContainer>
);

const AppLoader = (props: IProps) => {
  if (!props.isFullScreen) {
    return <Loader size={props.size} />;
  }

  return (
    <LoaderContainer>
      <Loader size={props.size} />
    </LoaderContainer>
  );
};

export default AppLoader;
