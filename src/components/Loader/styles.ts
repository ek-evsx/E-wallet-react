import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.3);
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
