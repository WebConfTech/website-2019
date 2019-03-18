import styled from 'styled-components';
import ErrorIcon from 'lib/assets/icon-error.svg';
import SuccessIcon from 'lib/assets/icon-success.svg';

const getValidationMessageTextColor = ({ theme, error, dark }) => {
  let color;
  if (dark) {
    color = theme.palette.text;
  } else if (error) {
    color = theme.palette.error;
  } else {
    color = theme.palette.generics.black;
  }

  return color;
};

export const ValidationMessage = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 1.05rem;
  min-height: 1.3125rem;
  padding-left: 1.923125rem;
  background-position: left 0.125rem top 0;
  background-repeat: no-repeat;
  background-image: url(${({ error }) => (error ? ErrorIcon : SuccessIcon)});
  color: ${getValidationMessageTextColor};
  em {
    font-size: 0.75rem;
    color: ${({ theme }) => theme.palette.secondary};
    line-height: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    em {
      color: ${({ theme }) => theme.palette.text};
      &::before {
        content: '"';
      }
      &::after {
        content: '"';
      }
    }
  }
`;
