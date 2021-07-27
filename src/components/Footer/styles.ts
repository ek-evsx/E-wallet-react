import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100vw;
  height: 5vh;

  display: flex;
  justify-content: flex-end;
  background-color: var(--white);

  position: absolute;
  bottom: 0;
`;

export const Copyright = styled.p`
  color: var(--dark-gray);
  padding: 0 10px;
  align-self: center;

  ::before {
    content: '©';
    margin-right: 5px;
  }
`;

export const CopyrightLink = styled.a`
  color: var(--dark-gray);
`;
