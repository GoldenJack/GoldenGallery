import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

import Avatar from 'molecules/Avatar'
import Counter from 'atoms/Counter'
import ButtonUpload from 'atoms/ButtonUpload'

const cn = bemHelper('user')


class User extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { name, recount, button, avatar } = this.props;
        const arr = 'photos';

        let uploadUrl = '/upload'
        let size = 'sm';

        return (
            <div { ...cn('') }>
                <Avatar image={ avatar } size={ size }/>
                <Link to="/edit" className="user__name">{ name }</Link>
                <Counter recount={ recount } arr={ arr } mix={ cn('counter').className }/>
                <ButtonUpload button={ button } mix={ cn('btn').className } to={ uploadUrl }/>
            </div>
        )
    }
}

User.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    recount: PropTypes.oneOfType([
        PropTypes.number, 
        PropTypes.string, 
        PropTypes.array
    ]).isRequired,
    button: PropTypes.string.isRequired
}

User.defaultTypes = {
    avatar: 'img/no_avatar.png',
    name: 'Безымянный',
    recount: 0,
    button: 'Создать'
}

export default User;