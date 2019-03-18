import styled, { css } from 'styled-components';
import JakartaRombusIcon from 'lib/assets/icon-rombus-jakarta.svg';

export const NavigationItem = styled.a`
  position: relative;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.1875rem 0;
  &:hover,
  &:active {
    color: ${({ theme }) => theme.palette.secondary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: ${({ theme }) => theme.palette.generics.black};
    display: inline-block;
    ${props =>
      props.active &&
      css`
        font-weight: bold;
        &:hover,
        &:active {
          color: ${({ theme }) => theme.palette.generics.black};
        }
        &::before {
          background-image: url(${JakartaRombusIcon});
          background-repeat: no-repeat;
          height: 1.4075rem;
          width: 0.8125rem;
          content: '';
          display: block;
          position: absolute;
          left: -1.8125rem;
          top: 0;
        }
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    color: ${({ theme }) => theme.palette.text};
    display: block;
    margin: 0 0.625rem;
    border-radius: 1.125rem;
    line-height: 2.1875rem;
    text-align: center;
    &:hover,
    &:active {
      color: ${({ theme }) => theme.palette.text};
    }

    ${props =>
      props.active &&
      css`
        color: ${({ theme }) => theme.palette.secondary};
        background-color: ${({ theme }) => theme.palette.text};
        &:hover,
        &:active {
          color: ${({ theme }) => theme.palette.secondary};
        }
      `}
  }
`;
