import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  reSizeGallery
} from 'features/Gallery/redux-store/entites/List';
import Account from './Account';

function mapStateToProps(state) {
  const { size } = state.gallery;
  return { size };
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
