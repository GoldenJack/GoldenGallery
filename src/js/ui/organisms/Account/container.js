import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import withMenu from 'HOC/menu/withMenu';
import { 
  reSizeGallery
} from 'features/Gallery/redux-store/entites/List';
import Account from './Account';

function mapStateToProps(state) {
  const {
    loaded,
    loading,
    size
  } = state.gallery;
  return {
    loaded,
    loading,
    size
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

export default connect(mapStateToProps, mapDispatchToProps)(withMenu(Account));
