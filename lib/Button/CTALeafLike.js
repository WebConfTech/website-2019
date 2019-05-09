import styled, { css } from 'styled-components';
import ChevronRightNegativeIcon from 'lib/assets/icon-chevron-right-negative.svg';
import ChevronUpNegativeIcon from 'lib/assets/icon-chevron-up-negative.svg';

const leftPositioned = css`
  padding: 1.45rem 3.75rem 1.05rem 2rem;
  border-top-right-radius: 6.4375rem;
  background-position: right 2.04375rem top 1.750625rem;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.7rem 7rem 1.3rem 3.125rem;
    border-top-right-radius: 6.25rem;
    background-position: right 3.75rem top 2.0625rem;
  }
`;

const rightPositioned = css`
  padding: 1.45rem 2rem 1.05rem 3.75rem;
  border-top-left-radius: 6.4375rem;
  background-position: left 2.04375rem top 1.750625rem;
  text-align: right;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.7rem 3.125rem 1.3rem 7rem;
    border-top-left-radius: 6.25rem;
    background-position: left 3.75rem top 50%;
  }
`;

export const CTALeafLike = styled.button`
  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: ${({ hideArrow }) => (hideArrow ? 'default' : 'pointer')};
  color: ${({ theme }) => theme.palette.text};
  text-decoration: none;
  font-family: inherit;
  font-size: 1rem;
  font-weight: lighter;
  text-transform: uppercase;
  white-space: nowrap;
  background-color: ${({ theme, color = 'primary' }) => theme.palette[color]};
  ${({ hideArrow }) =>
    !hideArrow &&
    css`
      background-image: url(${({ icon = 'right' }) =>
        icon === 'right' ? ChevronRightNegativeIcon : ChevronUpNegativeIcon});
    `}
  background-repeat: no-repeat;
  background-size: 1.249375rem 1.735rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.375rem;
    font-weight: normal;
    background-size: unset;
  }

  ${({ position = 'left' }) => (position === 'left' ? leftPositioned : rightPositioned)}
`;
