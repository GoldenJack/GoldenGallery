import { connect } from 'react-redux'
import { previewPhoto, closePreview } from '../../actions/galleryActions'

import Gallery from './Gallery'


const mapStateToProps = store => {
    return { 
        gallery: store.galleryReducer.gallery,
        preview: store.previewReducer
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