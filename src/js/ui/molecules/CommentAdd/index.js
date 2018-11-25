import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

import Avatar from 'molecules/Avatar'

const cn = bemHelper('comment-add')


class CommentAdd extends Component {
    constructor(props){
        super(props)

        this.state = {
            comment: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange( text ){
        return this.setState({
            comment: text.target.value
        })
    }

    render(){
        const { mix } = this.props; 

        return (
            <div { ...cn('', '', mix) } >
                <Avatar size="xs" mix={ cn('avatar').className } image="img/avatar.png" />
                <form onChange={ this.handleSubmit } { ...cn('form') } >
                    <textarea 
                        type="text" { ...cn('textarea') } 
                        value={ this.state.comment } 
                        onChange={ this.handleChange }/>
                </form>
            </div>
        )
    }
}

CommentAdd.propTypes = {

}

export default CommentAdd;