import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    image: PropTypes.string.isRequired,
    className: PropTypes.string,
    preview: PropTypes.func
}
class Image extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { image, className, preview } = this.props;
        return (
            <img src={ image } className={ className } onClick={ preview }/>
        )
    }
}

Image.propTypes = propTypes;

export default Image;