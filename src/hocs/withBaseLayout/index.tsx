import React from 'react';

import Footer from 'components/Footer';

const withBaseLayout = <P extends object>(Component: React.ComponentType<P>) => (props: P) => {
  return (
    <>
      <Component {...props} />
      <Footer/>
    </>
  );
};

export default withBaseLayout;
