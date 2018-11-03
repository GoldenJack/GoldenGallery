import React, { Component } from 'react'

class User extends Component {
    render(){
        return (
            <div className="user">
                <div className="user__avatar">
                    <img src="{ props.user.avatar }" className="user__image"></img>
                </div>
                <p className="user__name">{ this.props.user.name }</p>
                <p className="user__count-photo">{ this.props.user.photo }</p>
                <a href="#" className="user__btn">upload</a>
            </div>
        )
    }
}

export default User;