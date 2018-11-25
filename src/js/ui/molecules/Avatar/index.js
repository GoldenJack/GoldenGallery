import React from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'

import { Link } from 'react-router-dom'
import Image from 'atoms/Image'

import './style.scss'

const cn = bemHelper('avatar');


const Avatar = ({ image, size, mix }) => {
    return (
        <div { ...cn('', size, mix) }>
            <Link to="/">
                <Image image={ image } mix={ cn('image').className } />
            </Link>
        </div>
    )
}

Avatar.propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'sx'])
}

Avatar.defaultProps = {
    image: '',
    size: ''
}

export default Avatar;