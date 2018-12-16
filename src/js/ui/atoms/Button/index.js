import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import { Link } from 'react-router-dom';
import './style.scss';

const cn = bemHelper('btn');

const Button = ({ text, mix, to, effect }) => (
  <Fragment>
    {to ? (
      <Link to={to} {...cn('', '', mix)}>{ text }</Link>
    ) : (
      <button type="submit" {...cn('', '', mix)} onClick={effect}>{text}</button>
    )}

  </Fragment>
);

Button.propTypes = {
  effect: PropTypes.func,
  text: PropTypes.string,
  mix: PropTypes.string,
  to: PropTypes.string
};

Button.defaultProps = {
  to: '',
  mix: '',
  text: 'Отправить',
  effect: () => {}
};

export default Button;
