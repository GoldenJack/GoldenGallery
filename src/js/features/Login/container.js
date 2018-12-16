import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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
    { },
    dispatch
  );
  return { ...actions }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
