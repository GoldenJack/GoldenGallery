import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Croppie from 'croppie'
import { Link } from 'react-router-dom'

import Image from 'atoms/Image/Image'

const propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    preview: PropTypes.func,
    number: PropTypes.number.isRequired,
    album: PropTypes.string
}



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
    

    render(){
        const { title, image, preview, number, album } = this.props;
        
        return (
            <div className="photo photo_wrap" ref={this.photo}>
                <div className="photo__content">
                    <Image image={ image } className="photo__image" preview={ preview }/>
                    <div className="photo__info">
                        <Link to={`/gallery/${ album }/${ number }`} 
                        className="photo__info-title">
                            { title }
                        </Link>
                    </div>
                </div>
                    
            </div>
        )
    }
}

Photo.propTypes = propTypes;

export default Photo;