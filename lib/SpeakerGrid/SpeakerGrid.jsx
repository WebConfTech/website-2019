import styled from 'styled-components';
import { SpeakerContainer, SpeakerName } from './Speaker';

export const SpeakerGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  &:hover {
    ${SpeakerContainer} {
      opacity: 0.5;

      &:hover {
        opacity: 1;
      }
    }
  }

  ${SpeakerContainer} {
    margin-right: 0.4rem;
    margin-bottom: 0.4rem;
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
`;
