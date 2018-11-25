import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

import Image from 'atoms/Image' 

const cn = bemHelper('figure')


const Figure = ({ image }) => (
    <div { ...cn('') }>
        <Image image={ image } mix={ cn('image').className } />
    </div>
)

Figure.propTypes = {
    image: PropTypes.string.isRequired
}

export default Figure;