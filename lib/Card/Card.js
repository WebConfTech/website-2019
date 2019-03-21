import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.palette.base};
  border-radius: 0.625rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    box-shadow: 0 0 0.625rem ${({ theme }) => theme.palette.cardShadow};
  }
`;
