import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

import { NavLink } from 'react-router-dom'

const cn = bemHelper('list')

const List = ({ title, menuLinks }) => (
    <div { ...cn('') }>
        <div { ...cn('caption') }>
            <h4 { ...cn('title') }>{ title }</h4>
        </div>
        <div { ...cn('list') }>
            { generateMenu( menuLinks ) }
        </div>
    </div>
)

let generateMenu = ( menuLinks ) => {
    return menuLinks.map( ( item ) => {
        return (
            <NavLink key={ item.key } to={ item.pathName } className="list__item" activeClassName="list__item_active">{ item.title }</NavLink>
        )
    } )
}

List.propTypes = {
    title: PropTypes.string.isRequired,
    menuLinks: PropTypes.array.isRequired
};


export default List;