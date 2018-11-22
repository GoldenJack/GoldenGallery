import { connect } from 'react-redux'
import { searchItem } from '../../actions/accountActions'

import Account from './Account'

const mapStateToProps = store => {
    return { 
        gallery: store.galleryReducer.gallery,
        user: store.userReducer.user
    }
}


const mapDispatchToProps = dispatch => {
    return {
        searchItemAction: e => dispatch(searchItem(e))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Account)