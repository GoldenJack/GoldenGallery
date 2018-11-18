import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Search from './Search/Search'
import User from './User/User'

const propTypes = {
    user: PropTypes.object.isRequired,
    gallery: PropTypes.array.isRequired
}

class Account extends Component {

    //TODO: написать функцию для подсчета файлов

    render(){
        const { user } = this.props
        return (
            <div className="account">
                <User name={ user.name } files={ 0 } avatar={ user.avatar }/>
                <Search/>
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

export default connect(
    mapStateToProps
)(Account)