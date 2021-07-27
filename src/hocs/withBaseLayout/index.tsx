import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';

const withBaseLayout = <P extends object>(Component: React.ComponentType<P>) => (props: P) => {
  return (
    <>
      <Header />
      <Component {...props} />
      <Footer/>
    </>
  );
};

export default withBaseLayout;
