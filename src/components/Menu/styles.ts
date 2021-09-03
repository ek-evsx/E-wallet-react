import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Menu = styled.nav`
  height: 7vh;
  width: 50%;

  display: flex;
`;

export const MenuItem = styled(Link)`
  display: flex;
  flex: 1;
  align-self: center;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;

  &.active {
    svg {
      fill: var(--purple);
    }

    ::before {
      content: '';
      width: 100%;
      position: absolute;
      // height: 0px;
      right: 0;
      bottom: 0;
      background-color: var(--purple);
      height: 5px;
    }
  }
`;

export const IconContainer = styled.span`
  width: 35px;
  height: 35px;
  
  svg {
    fill: var(--gray);
    height: inherit;
    width: inherit;
  }
`;
