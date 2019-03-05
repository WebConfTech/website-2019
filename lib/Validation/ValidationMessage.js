import styled from 'styled-components';
import ErrorIcon from 'lib/assets/icon-error.svg';
import SuccessIcon from 'lib/assets/icon-success.svg';

export const ValidationMessage = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.05rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 1.1875rem;
  padding-left: 1.923125rem;
  background-position: left center;
  background-repeat: no-repeat;
  background-image: url(${({ error }) => (error ? ErrorIcon : SuccessIcon)});
  color: ${({ theme, error }) => (error ? theme.palette.error : theme.palette.generics.black)};
  a {
    color: ${({ theme }) => theme.palette.secondary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
