import React, { useEffect, useState } from 'react';

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

const Loader = (props: ILoaderProps) => (
  <LoaderSizeContainer size={props.size}>
    <div className="loadingio-spinner-ripple-164wyi4d59z">
    <div className="ldio-sqy8nhht2f">
      <div></div>
      <div></div>
    </div>
    </div>
  </LoaderSizeContainer>
);

const AppLoader = (props: IProps) => {
  const [shouldMount, setShoulMount] = useState(true);
  useEffect(() => {
    if (!props.loading) {
      setTimeout(() => setShoulMount(false), 1000);
    }
  }, [props.loading]);

  if (!shouldMount) {
    return null;
  }

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
