import styled from 'styled-components';
import { SpeakerContainer, SpeakerName } from './Speaker';

export const SpeakerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 12.5rem);
  grid-column-gap: 0.4rem;
  grid-row-gap: 0.4rem;

  &:hover {
    ${SpeakerContainer} {
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }
  }

  ${SpeakerContainer}:nth-of-type(even) {
    flex-direction: column-reverse;
  }

  ${SpeakerContainer}:nth-of-type(3n + 1) {
    ${SpeakerName} {
      background-color: ${({ theme }) => theme.palette.secondary};
    }
  }

  ${SpeakerContainer}:nth-of-type(3n + 2) {
    ${SpeakerName} {
      background-color: ${({ theme }) => theme.palette.generics.black};
    }
  }

  ${SpeakerContainer}:nth-of-type(3n + 3) {
    ${SpeakerName} {
      background-color: ${({ theme }) => theme.palette.primary};
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.smallScreen}) {
    grid-template-columns: repeat(auto-fill, 18.75rem);
    grid-column-gap: 0.6rem;
    grid-row-gap: 0.6rem;
  }
`;
