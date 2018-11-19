import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchItem } from '../../actions/accountActions'
import PropTypes from 'prop-types'

import Search from '../../components/Search/Search'
import User from '../../components/User/User'

const propTypes = {
    user: PropTypes.object.isRequired,
    gallery: PropTypes.array.isRequired,
    searchItemAction: PropTypes.func.isRequired
}

class Account extends Component {
    _countFiles( gallery ){
        let count = 0;

        if(gallery.length){
            gallery.map( ( item ) => {
                count += item.photos.length;
            } )
        } else {
            return count;
        }

        return count;
    }

    render(){
        const { user, gallery, searchItemAction } = this.props
        let files = this._countFiles( gallery )

        return (
            <div className="account">
                <User name={ user.name } files={ files } avatar={ user.avatar } button={ user.button }/>
                <Search searchFunc={ searchItemAction }/>
            </div>
        )
    }
}

Account.propTypes = propTypes;

const mapStateToProps = store => {
    return { 
        gallery: store.galleryReducere.gallery,
        user: store.userReducere.user
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