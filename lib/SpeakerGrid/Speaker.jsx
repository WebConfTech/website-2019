import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';
import ReactMarkdown from 'react-markdown';

const SpeakerDescription = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: ${({ theme }) => transparentize(0.2, theme.palette.generics.black)};
  color: ${({ theme }) => theme.palette.text};
  font-size: 1.15rem;
  font-stretch: 95%;
`;

export const SpeakerContainer = styled.div`
  width: 18.75rem;
  height: 28.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  transition: all 0.5s ease-out;

  &:hover {
    ${SpeakerDescription} {
      display: flex;
    }
  }
`;

export const SpeakerName = styled.div`
  height: 6.25rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text};
`;

export const SpeakerPhoto = styled.div`
  position: relative;
  height: 21.9rem;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SpeakerLongDescription = styled.div`
  display: block;
`;

export const Speaker = ({
  firstName,
  lastName,
  image,
  shortDescription,
  longDescription,
  twitterHandle
}) => (
  <SpeakerContainer>
    <SpeakerName>
      {firstName}
      <br />
      {lastName}
    </SpeakerName>
    <SpeakerPhoto>
      <img src={image} alt={`foto de ${firstName} ${lastName}`} />
      <SpeakerDescription>
        <SpeakerLongDescription>
          <ReactMarkdown>{longDescription}</ReactMarkdown>
        </SpeakerLongDescription>
      </SpeakerDescription>
    </SpeakerPhoto>
  </SpeakerContainer>
);

Speaker.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  longDescription: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string,
  reverse: PropTypes.bool
};

Speaker.defaultProps = {
  twitterHandle: null,
  reverse: false
};
