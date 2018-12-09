import React from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('btn');

const ButtonUpload = ({ button, mix, to }) => (
  <a href={to} {...cn('', '', mix)}>{ button }</a>
);

ButtonUpload.propTypes = {
  button: PropTypes.string.isRequired,
  mix: PropTypes.string,
  to: PropTypes.string
};

ButtonUpload.defaultProps = {
  mix: '',
  to: '#'
};

export default ButtonUpload;
