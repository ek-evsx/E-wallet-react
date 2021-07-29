import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const rotateIcon = (props: IButton) =>
css`
  ${rotate} ${props.isRefetching ? '2s' : '0s'} infinite;

`;

interface IButton {
  isRefetching: boolean;
};

export const RefetchButton = styled.button<IButton>`
  border: none;
  outline: none;
  border-radius: 15px;

  width: 30px;
  height: 30px;

  position: absolute;
  top: 15px;
  right: 15px;

  background-color: var(--light-purple);

  cursor: pointer;

  animation: ${rotateIcon};

  > svg {
    fill: var(--white);
  }
`;
