import React, { Component } from 'react';
import User from './User/User';
import Search from './Search/Search';

export default class Account extends Component {

    render(){
        const user = {
            name: 'Golden Jack',
            files: 0,
            avatar: 'img/avatar.png'
        };

        return (
            <div className="account">
                <User name={ user.name } files={ user.files } avatar={ user.avatar }/>
                <Search/>
            </div>
        )
    }
}