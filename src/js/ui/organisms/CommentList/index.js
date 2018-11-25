import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

import CommentAdd from 'molecules/CommentAdd'
import Commentary from 'molecules/Commentary'
import DataBar from 'molecules/DataBar'


const cn = bemHelper('comments')

class CommentList extends Component {
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
                    text={ item.comment.text }
                    name={ item.author.name }/>
            ))
        } else {
            return <p>Пока что никто не комментировал. Ты можешь стать первым ;)</p>
        }
    }

    getWidth(){
        return `${this.detailed.current.offsetWidth - 20}px`;
    }

    render(){
        const { mix, comments, modify, countLikes } = this.props;
        const { width } = this.state;
        let commentsList = this.generateComments( comments )

        return (
            <div { ...cn('', modify, mix) } ref={ this.detailed }>
                <DataBar countLikes={ countLikes }/>
                <div { ...cn('list') }>
                    { commentsList }
                </div>
                

                <CommentAdd mix={ cn('comment-add').className } width={ width } />
            </div>
        )
    }
}

CommentList.propTypes = {
    mix: PropTypes.string,
    comments: PropTypes.array
}

CommentList.defaultProps = {
    mix: '',
    comments: []
}

export default CommentList;