import styled from 'styled-components';

export const Button = styled.button`
  text-decoration: underline;
  font-size: 1.2em;

  color: var(--white);
  background-color: transparent;

  outline: none;
  border: none;

  cursor: pointer;

  :hover {
    color: var(--lighter-gray);
  }

  :active {
    color: var(--light-gray);
  }
`;
