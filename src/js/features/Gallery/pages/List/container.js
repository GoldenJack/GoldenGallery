import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
    getGallery
} from 'features/Gallery/redux-store/entites/List'
import Page from './page'


function mapStateToProps(state) {
    const {
        loading,
        loaded,
        error,
        entities: gallery
    } = state.gallery;
    return {
        loading,
        loaded,
        error,
        gallery
    }
}

const mapDispatchToProps = dispatch => {
    const actions = bindActionCreators(
        {
            getGallery
        },
        dispatch
    );
    return { ...actions }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page)

