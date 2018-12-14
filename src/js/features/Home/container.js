import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getHome
} from './redux-store/entities/home';
import Page from './page';


const mapStateToProps = state => {
  const {
    loading,
    loaded,
    error,
    entities: home
  } = state.home
  return {
    loaded,
    loading,
    error,
    home
  }
};

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(
    {
      getHome
    },
    dispatch
  );

  return { ...actions }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
