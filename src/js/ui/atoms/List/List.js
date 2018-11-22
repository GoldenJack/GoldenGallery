import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const propTypes = {
    title: PropTypes.string.isRequired,
    menuLinks: PropTypes.array.isRequired
}

class List extends Component {
    constructor(props){
        super(props)
    }

    _generateMenu( menuLinks ){
        return menuLinks.map( ( item ) => {
            return (
                <NavLink key={ item.key } to={ item.pathName } className="list__item" activeClassName="list__item_active">{ item.title }</NavLink>
            )
        } )
    }

    render(){
        const { title, menuLinks } = this.props;
        let links = this._generateMenu( menuLinks )

        return (
            <div className="list">
                <div className="list__caption">
                    <h4 className="list__title">{ title }</h4>
                </div>
                <div className="list__list">
                    { links }
                </div>
            </div>
        )
    }
}

List.propTypes = propTypes;

export default List;