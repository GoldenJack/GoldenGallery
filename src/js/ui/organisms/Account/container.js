import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  reSizeGallery,
  getGallery
} from 'features/Gallery/redux-store/entites/List';
import Account from './Account';

function mapStateToProps(state) {
  const {
    loaded,
    loading,
    entities: gallery,
    size
  } = state.gallery;
  return {
    loaded,
    loading,
    size,
    gallery,
  };
}

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(
    {
      reSizeGallery
    },
    dispatch
  );
  return { ...actions }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
