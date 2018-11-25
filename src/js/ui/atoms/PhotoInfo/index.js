import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

const cn = bemHelper('info-photo');


const InfoPhoto = ({ title }) => (
    <div { ...cn('') }>
        <h2>{ title }</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fuga assumenda, delectus, quidem ipsam rem porro quam, consequuntur ut temporibus nobis provident? Totam repudiandae impedit facilis accusamus cum, maxime pariatur laborum accusantium a. Dolores ad error sint iste? Sit repellat alias eveniet mollitia vel molestiae, ab veritatis in, quam voluptatibus architecto quae necessitatibus, eaque accusamus dolore repudiandae deleniti dignissimos maxime. Neque consequuntur sunt necessitatibus, obcaecati deserunt optio inventore aliquid harum excepturi provident alias soluta fuga aspernatur, autem, sint dolores architecto vel nulla iure quis cumque recusandae! Earum, animi sed! Itaque repellendus dolorum corporis dolores commodi nisi nam possimus totam inventore!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fuga assumenda, delectus, quidem ipsam rem porro quam, consequuntur ut temporibus nobis provident? Totam repudiandae impedit facilis accusamus cum, maxime pariatur laborum accusantium a. Dolores ad error sint iste? Sit repellat alias eveniet mollitia vel molestiae, ab veritatis in, quam voluptatibus architecto quae necessitatibus, eaque accusamus dolore repudiandae deleniti dignissimos maxime. Neque consequuntur sunt necessitatibus, obcaecati deserunt optio inventore aliquid harum excepturi provident alias soluta fuga aspernatur, autem, sint dolores architecto vel nulla iure quis cumque recusandae! Earum, animi sed! Itaque repellendus dolorum corporis dolores commodi nisi nam possimus totam inventore!</p>
    </div>
)

InfoPhoto.propTypes = {
    title: PropTypes.string
}

export default InfoPhoto;