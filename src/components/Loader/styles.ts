import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: var(--light-gray);
`;

export const LoaderSizeContainer = styled.div<{
  size?: number;
}>`
  width: 125px;
  height: 125px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${props => props.size && `
    width: ${props.size}px;
    height: ${props.size}px;
  `}
`;
