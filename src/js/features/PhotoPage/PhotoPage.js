import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { gallery } from '../../data/gallery'
import bemHelper from 'utils/bem-helper'
import './style.scss'

import Figure from 'molecules/Figure/Figure'
import Detailed from 'organisms/Detailed'
import Description from 'atoms/Description'

const cn = bemHelper('photo-page');

const defaultProps = {
    title: '',
    image: ''
}

const propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    comments: PropTypes.array
}



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
                    <Description title={ title } />
                </div>

                
                <Detailed mix={ cn('detailed').className } comments={ comments }/>
            </div>
        )
    }
}

PhotoPage.propTypes = propTypes;
Image.defaultProps = defaultProps;


export default PhotoPage;