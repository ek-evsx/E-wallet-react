import styled from 'styled-components';

export const LoginContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400px;
  min-height: 350px;

  background-color: var(--white);

  padding: 10px;

  border-radius: 5px;
`;

export const Logo = styled.img`
  width: 180px;
  height: 70px;
  margin-top: 30px;
`;

export const LoginFormContainer = styled.div`
  margin: 30px 0;
`;
