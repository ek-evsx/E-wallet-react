import styled from 'styled-components';

import { BUTTON_SIZE, BUTTON_COLOR } from 'utils/constants';

export const ButtonUI = styled.button<{
  size?: BUTTON_SIZE,
  color?: BUTTON_COLOR,
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
`;