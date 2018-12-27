import React from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('input');


const Input = ({ type, text, value, ...props }) => (
  <input
    {...cn()}
    type={type}
    placeholder={text}
    value={value}
    {...props}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  value: PropTypes.string.isRequired
}

Input.defaultProps = {
  type: 'text',
  text: ''
};

export default Input;
