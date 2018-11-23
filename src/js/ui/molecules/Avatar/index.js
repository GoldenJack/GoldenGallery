import React from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'

import { Link } from 'react-router-dom'
import Image from 'atoms/Image/Image'

import './style.scss'

const cn = bemHelper('avatar');

const propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['sm', 'sx'])
}

const Avatar = ({ image, size, mix }) => {
    return (
        <div { ...cn('', size, mix) }>
            <Link to="/">
                <Image image={ image } { ...cn('image') } />
            </Link>
        </div>
    )
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = {
    size: 'sm'
}

export default Avatar;