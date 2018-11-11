import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class User extends Component {
    constructor(props){
        super(props);

        this.state = {
            upload: null
        }
    }

    handleClick(){
        AppDispatcher.dispatch({
            eventName: 'upload',
            data: {
                'title': 'Item1',
                'desc': 'Lorem ipsim gold ramen'
            }
        })
    }

    render(){
        return (
            <div className="home__user user">
                <div className="user__avatar">
                <Link to="/">
                    <img src={ this.props.avatar } className="user__avatar-image" />
                </Link>
                </div>
                <Link to="/edit" className="user__name">{ this.props.name }</Link>
                <p className="user__count-files">{ this.props.files }</p>
                <a href="" className="user__btn btn" onClick={ this.handleClick.bind(this) }>UPLOAD</a>
            </div>
        )
    }
}

export default User;