import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BUTTON_SIZE, BUTTON_COLOR } from 'utils/constants';

export const ButtonUI = styled.button<{
  size?: BUTTON_SIZE,
  color?: BUTTON_COLOR,
  isLink?: boolean;
  as?: string | React.ReactElement;
}>`
  border-radius: 20px;
  color: var(--white);
  background-color: var(--light-purple);
  font-size: 15px;
  min-width: 150px;
  height: 40px;
  border: none;
  outline: none;
  letter-spacing: 2px;
  text-decoration: none;

  :hover {
    background-color: var(--purple);
  }

  :active {
    background-color: var(--purple-lighter);
  }

  ${(props) => props.color === BUTTON_COLOR.PRIMARY && 
    `
      background-color: var(--light-blue);

      :hover {
        background-color: var(--blue);
      }
    
      :active {
        background-color: var(--blue-lighter);
      }
    `
  }

  ${(props) => props.color === BUTTON_COLOR.SUCCESS && 
    `
      background-color: var(--light-aqua);

      :hover {
        background-color: var(--aqua);
      }
    
      :active {
        background-color: var(--aqua-lighter);
      }
    `
  }

  ${(props) => props.size === BUTTON_SIZE.LARGE && 
    `
      min-width: 220px;
      height: 50px;
      font-size: 18px;
      border-radius: 30px;
    `
  }

  ${(props) => props.isLink && `
    display: inline-block;
    line-height: 2.5;
  `}
`;

export const ButtonLink = ButtonUI.withComponent(Link);