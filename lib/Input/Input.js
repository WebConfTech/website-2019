import styled, { css } from 'styled-components';

const errorStyles = css`
  border-color: ${({ theme }) => theme.palette.error};
`;

export const Input = styled.input`
  margin: 0rem;
  padding: 0.125rem 0.75rem;
  width: auto;
  color: ${({ error, color, theme }) =>
    color === 'secondary' ? theme.palette.secondary : theme.palette.primary};
  border-radius: 0.625rem;
  border: 0.0625rem solid
    ${({ color, theme }) =>
      color === 'secondary' ? theme.palette.secondary : theme.palette.primary};
  font-size: 0.875rem;
  outline: none;
  transition: ease-out 300ms;

  ${({ hasError }) => (hasError ? errorStyles : '')};
`;
