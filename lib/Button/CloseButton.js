import styled from 'styled-components';
import IconCloseNegative from 'lib/assets/icon-close-negative.svg';

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  width: 3.375rem;
  height: 3.375rem;
  border-radius: 1.6875rem;
  background-color: ${({ theme, color = 'primary' }) => theme.palette[color]};
  cursor: pointer;

  &::after {
    line-height: 0;
    content: url(${IconCloseNegative});
  }
`;
