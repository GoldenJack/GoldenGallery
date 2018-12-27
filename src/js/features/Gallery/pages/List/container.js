import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withPreview from 'HOC/Preview/withPreview';
import {
  getGallery
} from 'features/Gallery/redux-store/entites/List';
import Page from './page';


function mapStateToProps(state) {
  const {
    loading,
    loaded,
    error,
    size,
    entities: gallery
  } = state.gallery;
  return {
    loading,
    loaded,
    error,
    size,
    gallery
  };
}

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(
    {
      getGallery
    },
    dispatch
  );
  return { ...actions };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withPreview(Page));
