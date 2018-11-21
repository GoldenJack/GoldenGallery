import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Croppie from 'croppie'
import { Link } from 'react-router-dom'

const propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
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
        const { title, src, preview, number } = this.props;
        return (
            <div className="photo photo_wrap" ref={this.photo}>
                <div className="photo__content">
                    <img src={ src } className="photo__image" onClick={ preview }/>
                    <div className="photo__info">
                        <Link to={`/gallery/album/${ number }`} 
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