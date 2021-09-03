import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { ComponentContainer, ChildContainer } from './styles';

const withBaseLayout = <P extends object>(Component: React.ComponentType<P>) => (props: P) => {
  return (
    <>
      <Header />
      <ChildContainer>
        <ComponentContainer>
          <Component {...props} />
        </ComponentContainer>
      </ChildContainer>
      <Footer />
    </>
  );
};

export default withBaseLayout;
