import styled, { css, keyframes } from 'styled-components';
import LoadingIcon from 'lib/assets/icon-rombus-disco.svg';

const pulse = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  30%, 70% {
    opacity: 1;
    transform: none;
  }
  100% {
    opacity: 0;
    transform: scale(0.7);
  }
`;
const loadingStyles = css`
  position: relative;
  color: transparent;
  background-color: ${({ theme }) => theme.palette.base};

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    content: url(${LoadingIcon});
    animation: ${pulse} 1s infinite;
  }
`;

const hoverStyles = css`
  &:hover {
    color: ${({ color, theme }) =>
      color === 'secondary' ? theme.palette.secondary : theme.palette.primary};
    background-color: ${({ theme }) => theme.palette.base};
  }
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 0 1rem;
  width: ${({ large }) => (large ? '100%' : 'auto')};
  height: ${({ large }) => (large ? '4.375rem' : '1.875rem')};
  color: ${({ theme }) => theme.palette.text};
  font-size: ${({ large }) => (large ? '1.25rem' : '0.75rem')};
  font-weight: ${({ large }) => (large ? 'bold' : 'lighter')};
  text-transform: uppercase;
  border-radius: 0.625rem;
  border: 0.0625rem solid
    ${({ color, theme }) =>
      color === 'secondary' ? theme.palette.secondary : theme.palette.primary};
  background-color: ${({ color, theme }) =>
    color === 'secondary' ? theme.palette.secondary : theme.palette.primary};
  text-align: center;
  transition: ease-out 300ms;
  &:disabled,
  &:disabled:hover {
    cursor: default;
    color: ${({ theme }) => theme.palette.text};
    background-color: ${({ theme }) => theme.palette.secondaryDisabled};
    border-color: ${({ theme }) => theme.palette.secondaryDisabled};
  }

  ${({ isLoading }) => (isLoading ? loadingStyles : hoverStyles)}
`;
