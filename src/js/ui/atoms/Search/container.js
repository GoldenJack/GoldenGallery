import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getGalleryByTitle
} from 'features/Gallery/redux-store/entites/List';
import Search from './Search';

function mapStateToProps(state) {
  const { gallery } = state.gallery;
  return { gallery };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators(
    {
      getGalleryByTitle
    },
    dispatch
  );
  return { ...actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
