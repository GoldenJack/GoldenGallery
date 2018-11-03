import React, { Component } from 'react'

class User extends Component {
    render(){
        return (
            <div className="user">
                <div className="user__avatar">
                    <img src={ this.props.avatar } className="user__image"></img>
                </div>
                <p className="user__name">{ this.props.name }</p>
                <p className="user__count-photo">{ this.props.files }</p>
                <a href="#" className="user__btn">upload</a>
            </div>
        )
    }
}

export default User;