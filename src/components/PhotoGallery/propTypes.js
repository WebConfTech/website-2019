import PropTypes from 'prop-types';

export const ImagePropTypes = {
  width: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired
};

export const PhotoPropTypes = {
  id: PropTypes.string,
  alt_text: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.shape(ImagePropTypes))
};
