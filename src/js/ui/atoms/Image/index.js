import React from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('image');

const Image = ({ image, preview, mix }) => (
  <img
    src={image}
    {...cn('', '', mix)}
    onClick={preview}
    role="none"
    alt="/"
  />
);

Image.propTypes = {
  image: PropTypes.string.isRequired,
  mix: PropTypes.string,
  preview: PropTypes.func
};

Image.defaultProps = {
  mix: '',
  preview: () => {}
};

export default Image;
