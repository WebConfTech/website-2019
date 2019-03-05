import styled, { css } from 'styled-components';

export const Tab = styled.button`
  cursor: pointer;
  display: block;
  line-height: 1.875rem;
  width: 3.9075rem;
  text-align: center;
  font-size: 1.1875rem;
  padding: 0;
  margin-right: 0.826875rem;
  border: 0;
  opacity: 0.5;
  border-radius: 0.1875rem 0.1875rem 1.25rem 0.1875rem;
  color: ${({ theme }) => theme.palette.text};
  background-color: ${({ theme }) => theme.palette.primary};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: 0.1875rem 0.1875rem 0.1875rem 0.8125rem;
    line-height: 2.1875rem;
    width: 1.875rem;
    margin-right: 0.375rem;
  }
  ${props =>
    props.active &&
    css`
      font-weight: bold;
      opacity: 1;
    `}
`;
