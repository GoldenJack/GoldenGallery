import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import Link from 'react-router';
import './style.scss'

const cn = bemHelper('btn');

const Button = ({ button, mix, to, type }) => (
  <Fragment>
    {type === "form" && (
      <a href={ to } { ...cn('', '', mix) }>{ button }</a>
    )}
    {type === "link" && (
      <Link to={ to } { ...cn('', '', mix) }>{ button }</Link>
    )}
  </Fragment>
)

Button.propTypes = {
  button: PropTypes.string.isRequired,
  mix: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf(['form', 'link'])
}

export default Button;