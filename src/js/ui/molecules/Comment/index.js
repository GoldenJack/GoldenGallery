import React from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'

const cn = bemHelper('comment');

const propTypes = {

}

const Comment = ({ date, text }) => (
    <div { ...cn('') }>
        <h4>{ date }</h4>
        <p>{ text }</p>
    </div>
)

export default Comment;