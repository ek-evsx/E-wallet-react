import React, { useEffect, useState } from 'react';

import Loader from 'components/Loader';

interface IProps {
  size?: number;
  isLoading: boolean;
  isFullScreen?: boolean;
};

const useLoader = (props: IProps) => {
  const { isLoading, ...loaderProps } = props;

  const [shouldShowLoader, setShouldShowLoader] = useState(isLoading);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setShouldShowLoader(false), 1000);
    } else {
      setShouldShowLoader(isLoading);
    }
  }, [isLoading]);

  return {
    Loader: <Loader {...loaderProps} />,
    shouldShowLoader,
  };
};

export default useLoader;
