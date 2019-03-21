import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.palette.base};
  box-shadow: 0 0 0.625rem ${({ theme }) => theme.palette.cardShadow};
  border-radius: 0.625rem;
`;
