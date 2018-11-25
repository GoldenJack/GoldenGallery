import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

import CommentAdd from 'molecules/CommentAdd'
import Commentary from 'molecules/Commentary'

const propTypes = {

}

const cn = bemHelper('detailed')

class Detailed extends Component {
    constructor(props){
        super(props)

        this.state = {
            width: 'auto'
        }

        this.detailed = React.createRef()
    }

    componentDidMount(){
        return this.setState({
            width: this.getWidth()
        })
    }

    generateComments( comments ){
        if(comments.length){
            return comments.map( ( item, i ) => (
                <Commentary 
                    key={ i } 
                    date={ item.comment.date }
                    text={ item.comment.text }/>
            ))
        } else {
            return <p>Пока что никто не комментировал. Ты можешь стать первым ;)</p>
        }
    }

    getWidth(){
        return `${this.detailed.current.offsetWidth - 20}px`;
    }

    render(){
        const { mix, comments } = this.props;
        const { width } = this.state;
        let commentsList = this.generateComments( comments )

        console.log( this.state.width )
        return (
            <div { ...cn('', '', mix) } ref={ this.detailed }>
                { commentsList }

                <CommentAdd mix={ cn('comment-add').className } width={ width } />
            </div>
        )
    }
}

export default Detailed;