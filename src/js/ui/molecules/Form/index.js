import React from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';

const cn = bemHelper('form');

const Form = ({ children, mix }) => (
  <form {...cn('', '', mix)}>
    {children}
  </form>
);

Form.propTypes = {
  mix: PropTypes.string,
  children: PropTypes.object.isRequired
};

Form.defaultProps = {
  mix: ''
};

export default Form;
