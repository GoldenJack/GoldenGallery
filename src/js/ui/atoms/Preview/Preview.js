import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    display: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired
}

const Preview = ({ img, close }) => (
    <div className="preview-box">
        <span className="preview-box__close" onClick={ close }></span>
        <div className="preview-box__wrap">
            <img src={ img } className="preview-box__image"/>
        </div>
    </div>
)

Preview.propTypes = propTypes;

export default Preview;