import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

const cn = bemHelper('info-photo');


const InfoPhoto = ({ title }) => (
    <div { ...cn('') }>
        <h2>{ title }</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa atque eos quisquam ullam ipsam corrupti</p>
    </div>
)

InfoPhoto.propTypes = {
    title: PropTypes.string
}

export default InfoPhoto;