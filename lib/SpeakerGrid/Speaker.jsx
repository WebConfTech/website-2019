import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { transparentize } from 'polished';
import TwitterIcon from 'assets/icons/twitter.svg';

const SpeakerDescription = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.25rem;
  background-color: ${({ theme }) => transparentize(0.5, theme.palette.generics.black)};
  color: ${({ theme }) => theme.palette.text};
  font-size: 0.8rem;
`;

export const SpeakerContainer = styled.div`
  width: 12.5rem;
  height: 19rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  &:hover {
    ${SpeakerDescription} {
      display: flex;
    }
  }
`;

export const SpeakerName = styled.div`
  height: 6.25rem;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  font-size: 1.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.text};
`;

export const SpeakerPhoto = styled.div`
  position: relative;
  height: 12.35rem;
  overflow: hidden;

  & > img {
    object-fit: cover;
  }
`;

export const SpeakerTwitterLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.palette.text};
  opacity: 0.5;
  text-decoration: none;

  & > img {
    height: 1.25rem;
    margin-right: 0.75rem;
  }
`;

export const Speaker = ({ firstName, lastName, image, description, twitterHandle }) => (
  <SpeakerContainer>
    <SpeakerName>
      {firstName}
      <br />
      {lastName}
    </SpeakerName>
    <SpeakerPhoto>
      <img src={image} alt={`foto de ${firstName} ${lastName}`} />
      <SpeakerDescription>
        <div>{description}</div>
        {twitterHandle ? (
          <SpeakerTwitterLink href={`https://twitter.com/${twitterHandle}`}>
            <img alt="twitter icon" src={TwitterIcon} />
            {twitterHandle}
          </SpeakerTwitterLink>
        ) : null}
      </SpeakerDescription>
    </SpeakerPhoto>
  </SpeakerContainer>
);

Speaker.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  twitterHandle: PropTypes.string,
  reverse: PropTypes.bool
};

Speaker.defaultProps = {
  twitterHandle: null,
  reverse: false
};
