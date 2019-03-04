import styled, { css } from 'styled-components';

export const CloseIcon = styled.a`
  display: block;
  width: 1.194375rem;
  height: 1.194375rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${props =>
      props.mobileOnly &&
      css`
        display: none;
      `}
  }
`;
