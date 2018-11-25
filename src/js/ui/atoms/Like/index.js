import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'

import Counter from 'atoms/Counter'

import icon from 'img/icons/like.svg'
import './style.scss'

const cn = bemHelper('like');

class Like extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            countLikes: this.props.countLikes,
            like: false
        }

        this.handleClick = this.handleClick.bind( this );
    }

    handleClick(){
        if(!this.state.like) {
            this.setState({
                countLikes: ++this.state.countLikes,
                like: true
            })
        } else {
            this.setState({
                countLikes: --this.state.countLikes,
                like: false
            })
        }
    }

    render(){
        const { mix } = this.props;
        const { countLikes } = this.state;

        return (
            <div { ...cn('', '', mix) }>
            {/* TODO: решить вопрос с svg для анимации */}
                <img src={ icon } { ...cn('image') } onClick={ this.handleClick }/>
                <Counter mix={ cn('counter').className } recount={ countLikes } />
            </div>
        )
    }
    
}

Like.propTypes = {
    countLikes: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired,
    mix: PropTypes.string
}

Like.defaultProps = {
    countLikes: '0',
    mix: ''
}

export default Like;