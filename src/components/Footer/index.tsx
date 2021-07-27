import React from 'react';

import { Footer, Copyright, CopyrightLink } from './styles';

const AppFooter = () => {
  return (
    <Footer>
      <Copyright>Copyright by{' '}
        <CopyrightLink href={'https://evsx.com'} target={'_blank'}>EVSX inc.</CopyrightLink>
      </Copyright>
    </Footer>
  );
};

export default AppFooter;
