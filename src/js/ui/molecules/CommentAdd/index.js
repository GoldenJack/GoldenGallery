import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

import Avatar from 'molecules/Avatar'

const cn = bemHelper('comment-add')

const propTypes = {

}

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
        const { mix, width } = this.props; 
        const style = {
            width: width
        }
        return (
            <div { ...cn('', '', mix) } style={ style }>
                <Avatar size="sx" mix={ cn('avatar').className } image="img/avatar.png" />
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

export default CommentAdd;