import React, { Component } from 'react'
import User from '../components/User'

class Home extends Component {
    render(){
        const user = {
            name: 'Golden Jack',
            files: 0,
            avatar: 'img/avatar.png'
        };

        return (
            <User name={ user.name } files={ user.files } avatar={ user.avatar }/>
        )
    }
}

export default Home