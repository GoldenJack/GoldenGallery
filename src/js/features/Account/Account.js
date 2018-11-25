import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Search from 'atoms/Search'
import User from 'organisms/User'
import List from 'atoms/List'

const propTypes = {
    user: PropTypes.object.isRequired,
    gallery: PropTypes.array.isRequired,
    searchItemAction: PropTypes.func.isRequired
}

class Account extends Component {
    _getMenu( gallery ) {
        let menuGallery = [];
        gallery.map( ( item ) => {
            return menuGallery.push({
                        "title": item.titleRu,
                        "pathName": `/gallery/${item.id}`,
                        "key": item.key
                    })
        } ) 
        return menuGallery;
    }

    render(){
        const { user, gallery, searchItemAction } = this.props

        let menu = [
            {
                "title": 'Галлерея', 
                "pathName": '/gallery', 
                "key": 0
            }
        ]
        let menuGallery = this._getMenu( gallery )

        return (
            <div className="account">
                <User 
                    name={ user.name }
                    avatar={ user.avatar } 
                    button={ user.button }
                    recount={ gallery }/>

                <Search searchFunc={ searchItemAction }/>
                <List title={ 'Menu' } menuLinks={ menu } />
                <List title={ 'Галлерея' } menuLinks={ menuGallery } />
            </div>
        )
    }
}

Account.propTypes = propTypes;

export default Account;