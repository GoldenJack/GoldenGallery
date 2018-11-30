import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

import Avatar from 'molecules/Avatar'

const cn = bemHelper('comment-add')


class CommentAdd extends Component {
    constructor(props){
        super(props)

        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    handleFocus(){
        let fake = event.target.nextElementSibling;
        if(!fake.classList.contains('hidden')){
            fake.classList.add('hidden')
        }
    }

    handleBlur(){
        let fake = event.target.nextElementSibling;
        let text = event.target.innerText;
        if(fake.classList.contains('hidden' && text)){
            fake.classList.remove('hidden')
        }
    }

    handleSubmit(){
        event.preventDefault();

        console.log()
    }

    render(){
        const { mix } = this.props; 

        return (
            <div { ...cn('', '', mix) } >
                <Avatar size="xs" mix={ cn('avatar').className } image="img/avatar.png" />
                <form onSubmit={ this.handleSubmit } { ...cn('form') } >
                    <div { ...cn('textarea') } onClick={ this.handleClick } onFocus={ this.handleFocus } role="textbox" contentEditable="true" aria-multiline="true" onBlur={ this.handleBlur }>
                    </div>
                    <span { ...cn('fake') }>Оставьте свой комментарий...</span>
                    <button { ...cn('button') } type="submit">Д</button>
                </form>
            </div>
        )
    }
}

CommentAdd.propTypes = {

}

export default CommentAdd;