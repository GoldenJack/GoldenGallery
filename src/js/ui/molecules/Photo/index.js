import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import Croppie from 'croppie';
import { Link } from 'react-router-dom'
import Image from 'atoms/Image'

import './style.scss'

const cn = bemHelper('photo');


class Photo extends Component {
    constructor(props){
        super(props)

        this.photo = React.createRef()
    }

    _resizePhoto(){
        let box = this.photo.current;
        let boxWidth = box.offsetWidth;
        let image = box.querySelector('.photo__image')

        let photo = new Croppie()

        //TODO: не работает конструктор
    }

    componentDidMount(){
        // this._resizePhoto()
    }

    getAnimationDuration() {
        return Math.floor(Math.random() * (2.5 - 0.5 + 0.5)) + 1;
    }
    

    render(){
        const { title, image, preview, size, url } = this.props;
        const animation = {
            animationDuration: `${this.getAnimationDuration()}s`
        }
        
        return (
            <div { ...cn('', size.toString(), '') } 
                style={ animation }
                ref={ this.photo }> 
                <div { ...cn('content') }>
                    <Image image={ image } mix={ cn('image').className } preview={ preview }/>
                    <div { ...cn('info') }>
                        <Link to={ url } 
                        { ...cn('info-title') }>
                            { title }
                        </Link>
                    </div>
                </div>  
            </div>
        )
    }
}

Photo.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string,
    preview: PropTypes.func,
    size: PropTypes.oneOf([2, 3, 4, 5])
}

Photo.defaultProps = {
    url: ''
}

export default Photo;