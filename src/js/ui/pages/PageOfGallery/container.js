import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  reSizeGallery,
  getGalleryByTitle
} from 'features/Gallery/redux-store/entites/List';
import Page from './page';

function mapStateToProps(state) {
  const {
    loaded,
    loading,
    error,
    size
  } = state.gallery;
  return {
    loaded,
    loading,
    error,
    size,
  };
}

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(
    {
      reSizeGallery,
      getGalleryByTitle
    },
    dispatch
  );
  return { ...actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
