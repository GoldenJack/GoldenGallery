import React from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

const cn = bemHelper('preview')

const Preview = ({ img, close, mix, display }) => (
    <div { ...cn('', '', `${mix} animated ${display ? 'fadeIn' : 'zoomOut'}`) }>
        <span { ...cn('close') } onClick={ close }></span>
        <div { ...cn('overlay') } onClick={ close }/>
        <div { ...cn('wrap', '', 'animated zoomIn') }>
            <img src={ img } { ...cn('image') }/>
        </div>
    </div>
)

Preview.propTypes = {
    img: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired,
    mix: PropTypes.string
}
Preview.defaultProps = {
    display: false,
    img: '',
    mix: ''
}

export default Preview;