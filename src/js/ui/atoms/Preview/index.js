import React from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

const cn = bemHelper('preview')

const Preview = ({ img, close, mix }) => (
    <div { ...cn('', '', mix) }>
        <span { ...cn('close') } onClick={ close }></span>
        <div { ...cn('wrap') }>
            <img src={ img } { ...cn('image') }/>
        </div>
    </div>
)

Preview.propTypes = {
    display: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired.propTypes,
    mix: PropTypes.string
}
Preview.defaultProps = {
    display: false,
    img: '',
    mix: ''
}

export default Preview;