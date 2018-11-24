import React, { Component } from 'react'
import Album from 'organisms/Album/Album'
import PropTypes from 'prop-types'
import Preview from 'atoms/Preview/index'

const propTypes = {
    gallery: PropTypes.array,
    preview: PropTypes.object.isRequired,
    closePreviewAction: PropTypes.func.isRequired
}

class Gallery extends Component {
    constructor(props){
        super(props);
    }

    _galleryAlbum( gallery ){
        if( gallery ){
            let result = gallery.map(( galleryAlbum )=>
                <Album 
                    key={ galleryAlbum.key } 
                    name={ galleryAlbum.titleRu } 
                    photos={ galleryAlbum.photos }
                    preview={ this.props.previewPhotoAction }
                    album={ galleryAlbum.id } />
            )
            
            return result;
        } else {
            return (
                <p>К сожалению ничего не удалось найти</p>
            )
        }
    }

    _galleryPreview( preview, cb ){
        return preview.previewDisplay ? <Preview 
                                            display={ preview.previewDisplay } 
                                            img={ preview.previewImg } 
                                            close={ cb }/> : null
    }

    render(){
        const { gallery, preview, closePreviewAction } = this.props;
        let album = this._galleryAlbum( gallery );
        let previewContent = this._galleryPreview( preview, closePreviewAction )

        return (
            <div className="gallery">
                { album }
                { previewContent }
            </div>
        )
    }
}

Gallery.propTypes = propTypes;

export default Gallery;