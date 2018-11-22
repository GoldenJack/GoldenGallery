import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { gallery } from '../../data/gallery'

import Image from '../Image/Image'

const propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

class PhotoPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            photo: {
                title: '',
                image: ''
            }
        }
    }

    componentDidMount(){
        const { number, album } = this.props.match.params;
        gallery.map( (item)=>{
            if( item.en.toLowerCase() === album ){
                let photo = item.photos.filter( (photo) => photo.id === +number )
                return this.setState({ 
                    photo: photo[0]
                })
            }
        } )
    }

    render(){
        const { title, image } = this.state.photo;
        return (
            <div>
                <p>Название: { title }  </p>
                <Image image={ image } />
            </div>
        )
    }
}

PhotoPage.propTypes = propTypes;

export default PhotoPage;