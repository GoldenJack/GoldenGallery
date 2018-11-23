import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Avatar from 'molecules/Avatar'

const propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    files: PropTypes.number.isRequired,
    button: PropTypes.string.isRequired
}

class User extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { name, files, button } = this.props;

        let avatar = ( this.props.avatar ) ? this.props.avatar : 'img/no_avatar.png'

        return (
            <div className="home__user user">
                <Avatar image={ avatar } />
                <Link to="/edit" className="user__name">{ name }</Link>
                <p className="user__count-files">{ files }</p>
                <a href="" className="user__btn btn">{ button }</a>
            </div>
        )
    }
}

User.propTypes = propTypes;

export default User;