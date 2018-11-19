import React, { Component } from 'react'
import Album from '../../components/Album/Album'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { previewPhoto, closePreview } from '../../actions/accountActions'
import Preview from '../../components/Preview/Preview'

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
                    key={ galleryAlbum.id } 
                    name={ galleryAlbum.ru } 
                    photos={ galleryAlbum.photos }
                    preview={ this.props.previewPhotoAction }/>
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

const mapStateToProps = store => {
    return { 
        gallery: store.galleryReducere.gallery,
        preview: store.previewReducere
    }
}

const mapDispatchToProps = dispatch => {
    return {
        previewPhotoAction: target => dispatch(previewPhoto( target )),
        closePreviewAction: () => dispatch(closePreview())
    }
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Gallery)