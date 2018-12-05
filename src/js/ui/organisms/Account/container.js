import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Account from './Account';

function mapStateToProps(state) {
  const { entities: gallery } = state.gallery;
  return { gallery };
}


export default connect(mapStateToProps, null)(Account);
