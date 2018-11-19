import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    display: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired
}

class Preview extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { display, img, close } = this.props;
        let style = (display) ? { display: 'block' } : { display: 'none' };

            
        return (
            <div className="preview-box" style={ style }>
                <span className="preview-box__close" onClick={ close }></span>
                <div className="preview-box__wrap">
                    <img src={ img } className="preview-box__image"/>
                </div>
            </div>
        )
    }
}

Preview.propTypes = propTypes;

export default Preview;