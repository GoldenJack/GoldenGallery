import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { gallery } from '../../data/gallery'

import Image from 'atoms/Image/Image'

const propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

const defaultProps = {
    title: '',
    image: ''
}

class PhotoPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            image: ''
        }
    }

    // componentDidMount(){
    //     const { number, album } = this.props.match.params;
    //     gallery.map( (item)=>{
    //         if( item.en.toLowerCase() === album ){
    //             let photo = item.photos.filter( (photo) => photo.id === +number )
    //             return this.setState({ 
    //                 photo: photo[0]
    //             })
    //         }
    //     } )
    // }

    static getDerivedStateFromProps(props){
        const { number, album } = props.match.params;
        let photo;
        gallery.forEach( item => {
            if( item.id === album ){
                photo = item.photos.filter( photo => photo.id === +number )
            }
        } )

        const { title, image } = photo[0];
        return { title, image }
    }

    render(){
        const { title, image } = this.state;
        return (
            <div>
                
            </div>
        )
    }
}

PhotoPage.propTypes = propTypes;
Image.defaultProps = defaultProps;


export default PhotoPage;