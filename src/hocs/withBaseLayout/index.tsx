import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

import { ComponentContainer, ChildContainer } from './styles';

const withBaseLayout = <P extends object>(Component: React.ComponentType<P>) => (props: P) => {
  return (
    <>
      <Header />
      <ChildContainer>
        <Sidebar />
        <ComponentContainer>
          <Component {...props} />
        </ComponentContainer>
      </ChildContainer>
      <Footer/>
    </>
  );
};

export default withBaseLayout;
