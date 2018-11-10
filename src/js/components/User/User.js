import React, { Component } from 'react';

class User extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="home__user user">
                <div className="user__avatar">
                    <img src={ this.props.avatar } className="user__avatar-image" onClick={ this.handleClick } ></img>
                </div>
                <p className="user__name">{ this.props.name }</p>
                <p className="user__count-files">{ this.props.files }</p>
                <a href="" className="user__btn btn">UPLOAD</a>
            </div>
        )
    }
}

export default User;