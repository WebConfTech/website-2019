import styled from 'styled-components';

export const MenuIconMobile = styled.a`
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    width: 3.890625rem;
    height: 4.125rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
