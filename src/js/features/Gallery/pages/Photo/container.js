import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getPhoto
} from 'features/Gallery/redux-store/entites/Photo';
import Page from './page';


function mapStateToProps(state) {
  const {
    loading,
    loaded,
    error,
    entities: photo
  } = state.galleryPhoto;
  return {
    loading,
    loaded,
    error,
    photo
  };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(
    {
      getPhoto
    },
    dispatch
  );

  return { ...actions };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
