import { connect } from 'react-redux';
import withAuth from 'HOC/withAuth';
import Page from './page';


const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuth(Page));
