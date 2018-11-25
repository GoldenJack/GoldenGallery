import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { gallery } from '../../data/gallery'
import bemHelper from 'utils/bem-helper'
import './style.scss'

import Figure from 'molecules/Figure'
import CommentList from 'organisms/CommentList'
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
                <div { ...cn('content') }>
                    <Figure image={ image } />
                    <PhotoInfo title={ title } />
                </div>
                
                <CommentList 
                    mix={ cn('comments').className } 
                    comments={ comments }
                    modify={ 'fixed' }/>
            </div>
        )
    }
}

PhotoPage.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    comments: PropTypes.array
};
PhotoPage.defaultTypes = {
    title: '',
    image: '',
    comments: []
};


export default PhotoPage;