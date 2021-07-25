import styled from 'styled-components';

export const Input = styled.input<{
  error: boolean;
}>`
  height: 30px;
  width: 300px;
  border-radius: 15px;
  margin: 10px;
  border: 1px solid var(--light-gray);

  :focus {
    border: 2px solid var(--aqua);
    outline: none;
  }

  ::placeholder {
    padding-left: 10px;
  }

  ${props => props.error && `
    border-color: var(--red);
  `}
`;

export const ErrorMessage = styled.div`
  color: var(--red);
  width: 300px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  margin-top: 30px;
`;
