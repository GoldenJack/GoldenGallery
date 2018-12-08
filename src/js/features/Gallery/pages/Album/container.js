import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withPreview from 'HOC/Preview/withPreview';
import { 
    getAlbum
} from 'features/Gallery/redux-store/entites/Album';
import Page from './page';

const mapStateToProps = state => {
  const {
    loading,
    loaded,
    error,
    entities: album
  } = state.galleryAlbum;
  return {
    loading,
    loaded,
    error,
    album
  }
}

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(
    {
      getAlbum
    },
    dispatch
  );

  return { ...actions }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withPreview(Page))
