import styled from 'styled-components';

export const Button = styled.button`
  text-decoration: underline;
  font-size: 1.2em;

  color: var(--gray);
  background-color: var(--white);

  outline: none;
  border: none;

  cursor: pointer;

  :hover {
    color: var(--dark-gray);
  }

  :active {
    color: var(--light-gray);
  }
`;
