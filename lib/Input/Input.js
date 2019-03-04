import styled, { css } from 'styled-components';
import ErrorIcon from 'lib/assets/icon-error.svg';

const errorStyles = css`
  padding-right: 2.5rem;
  border-color: ${({ theme }) => theme.palette.error};
  background-image: url(${ErrorIcon});
  background-position: top 0.25rem right 0.625rem;
  background-repeat: no-repeat;
`;

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

  ${({ hasError }) => (hasError ? errorStyles : '')};
`;
