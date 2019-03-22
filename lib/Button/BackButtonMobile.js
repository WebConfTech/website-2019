import styled from 'styled-components';
import ChevronLeftWhiteIcon from 'lib/assets/icon-chevron-left-white.svg';

export const BackButtonMobile = styled.button`
  display: block;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  background-image: url(${ChevronLeftWhiteIcon});
  background-repeat: no-repeat;
  background-position: center;
  height: 2.5rem;
  width: 2.5rem;
  margin-left: -1.25rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
