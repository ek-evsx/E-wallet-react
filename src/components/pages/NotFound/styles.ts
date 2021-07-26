import styled from 'styled-components';

export const NotFound = styled.main`
  border-radius: 5px;
  background-color: var(--white);
  width: 700px;
  height: 350px;
  padding: 10px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Header = styled.h1`
  color: var(--purple);
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  font-size: 6em;
  margin: 10px;
`;

export const SubHeader = styled.h3`
  color: var(--dark-gray);
  font-weight: 400;
  text-align: center;
  font-size: 2.2em;
  margin: 30px 0 0;
`;

export const InfoText = styled.h5`
  color: var(--gray);
  font-weight: 400;
  text-align: center;
  font-size: 1.25em;
  margin: 15px;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin: 50px 0;
`;
