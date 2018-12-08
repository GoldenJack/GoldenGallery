import React from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'

const cn = bemHelper('icon')

const Icon = ({ icon, mix }) => (
  <FontAwesomeIcon icon={ icon } { ...cn('', '', mix) } />
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  mix: PropTypes.string,
}

Icon.defaultProps = {
  image: '',
  mix: ''
}

export default Icon;