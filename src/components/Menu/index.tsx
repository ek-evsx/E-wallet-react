import React from 'react';
import { useLocation } from 'react-router';

import { Menu, MenuItem, IconContainer } from './styles';
import menuLinks from './menuLinks';

const AppMenu = () => {
  const location = useLocation();
  return (
    <Menu>
      {
        menuLinks.map(({ Icon, label, to }) => 
          <MenuItem 
            key={label} 
            title={label} 
            to={to}
            className={String(location.pathname) === String(to) ? 'active' : ''}
          >
            <IconContainer>
              <Icon />
            </IconContainer>
          </MenuItem>
        )
      }
    </Menu>
  );
};

export default AppMenu;
