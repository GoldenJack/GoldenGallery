import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    image: PropTypes.string.isRequired,
    className: PropTypes.string,
    preview: PropTypes.func
}

const Image = ({ image, className, preview }) => (
    <img src={ image } 
        className={ className } 
        onClick={ preview }/>
)

Image.propTypes = propTypes;

export default Image;