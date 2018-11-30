import { connect } from 'react-redux';

import Account from './Account'

const mapStateToProps = store => {
    return { }
}


const mapDispatchToProps = dispatch => {
    return {
        // searchItemAction: e => dispatch(searchItem(e))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Account)