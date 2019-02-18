import styled from 'styled-components';

export const Input = styled.input`
  margin: 0rem;
  padding: 0.125rem 0.75rem;
  width: auto;
  color: ${({ color, theme }) =>
    color === 'secondary' ? theme.palette.secondary : theme.palette.primary};
  border-radius: 0.625rem;
  border: 0.0625rem solid
    ${({ color, theme }) =>
      color === 'secondary' ? theme.palette.secondary : theme.palette.primary};
  font-size: 0.875rem;
  outline: none;
  transition: ease-out 300ms;
`;
