import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { gallery } from '../../data/gallery'
import bemHelper from 'utils/bem-helper'
import './style.scss'

import Figure from 'molecules/Figure/Figure'
import Detailed from 'organisms/Detailed'
import PhotoInfo from 'atoms/PhotoInfo'

const cn = bemHelper('photo-page');



class PhotoPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            image: '',
            comments: []
        }
    }

    static getDerivedStateFromProps(props){
        const { number, album } = props.match.params;
        const [filteredAlbum] = gallery.filter(albumData => albumData.id === album);
        const [filteredPhoto] = filteredAlbum.photos.filter(({ id }) => id === +number);
        const { title, image, comments } = filteredPhoto;
        return { title, image, comments }
    }

    render(){
        const { title, image, comments } = this.state;

        return (
            <div { ...cn('') }>
                <div className="wrap">
                    <Figure image={ image } />
                    <PhotoInfo title={ title } />
                </div>

                
                <Detailed mix={ cn('detailed').className } comments={ comments }/>
            </div>
        )
    }
}

PhotoPage.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    comments: PropTypes.array
};
Image.defaultTypes = {
    title: '',
    image: '',
    comments: []
};


export default PhotoPage;