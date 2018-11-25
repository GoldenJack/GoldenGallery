import React from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import Avatar from 'molecules/Avatar'

import './style.scss'

const cn = bemHelper('comment');


const Commentary = ({ name, date, text }) => (
    <div { ...cn('') }>
        <Avatar 
            mix={ cn('avatar').className }
            size={ 'xs' } />
        <div { ...cn('body') }>
            <div { ...cn('head') }>
                <span { ...cn('name') }> { name } </span>
                <span { ...cn('date') }> { date } </span>
            </div>
            <p { ...cn('text') }>{ text }</p>
        </div>
    </div>
)

Commentary.propTypes = {
    
}

export default Commentary;