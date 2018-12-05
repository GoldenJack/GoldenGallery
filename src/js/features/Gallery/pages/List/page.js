import React, { Component, Fragment } from 'react';
import Album from 'organisms/Album';
import PropTypes from 'prop-types';
import Preview from 'atoms/Preview';
import Preloader from 'atoms/Preloader';
import './style.scss';


class GalleryList extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const { loaded, loading, getGallery } = this.props;
        !loaded && !loading && getGallery();
    }

    _galleryAlbum( gallery ){
        if( gallery ){
            let result = gallery.map(( galleryAlbum )=>
                <Album 
                    key={ galleryAlbum.key } 
                    name={ galleryAlbum.titleRu } 
                    photos={ galleryAlbum.photos }
                    preview={ this.props.previewPhotoAction }
                    album={ galleryAlbum.id } 
                    parrent={ 'gallery' }/>
            )
            
            return result;
        } else {
            return (
                <p>К сожалению ничего не удалось найти</p>
            )
        }
    }

    _galleryPreview( preview, cb ){
        return preview.previewDisplay 
            ? <Preview 
                display={ preview.previewDisplay } 
                img={ preview.previewImg } 
                close={ cb }/> : null
    }

    render(){
        const { loading, gallery, preview, closePreviewAction } = this.props;
        let album = !loading && this._galleryAlbum( gallery );
        // let previewContent = this._galleryPreview( preview, closePreviewAction )

        return (
            <Fragment >
                <Preloader loading={ loading } />
                { !loading && (
                    <div className="gallery animated fadeIn">
                        { album }
                    </div>
                ) }
            </Fragment>
        )
    }
}

GalleryList.propTypes = {
    gallery: PropTypes.array,
    preview: PropTypes.object.isRequired,
    closePreviewAction: PropTypes.func
};

GalleryList.defaultProps = {
    gallery: [],
    preview: {}
}

export default GalleryList;