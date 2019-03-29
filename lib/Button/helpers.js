import { css, keyframes } from 'styled-components';
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

export const loadingStyles = height => css`
  position: relative;
  color: transparent;
  background-color: ${({ theme }) => theme.palette.base};

  &::after {
    position: absolute;
    left: 0;
    right: 0;
    top: ${(100 - height) / 2}%;
    height: ${height}%;
    background-image: url(${LoadingIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    animation: ${pulse} 1s infinite;
    content: '';
  }
`;
