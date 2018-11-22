import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Search from 'atoms/Search/Search'
import User from 'molecules/User/User'
import List from 'atoms/List/List'

const propTypes = {
    user: PropTypes.object.isRequired,
    gallery: PropTypes.array.isRequired,
    searchItemAction: PropTypes.func.isRequired
}

class Account extends Component {
    _countFiles( gallery ){
        let count = 0;

        if(gallery.length){
            gallery.map( ( item ) => {
                count += item.photos.length;
            } )
        } else {
            return count;
        }

        return count;
    }

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
        let files = this._countFiles( gallery )
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
                <User name={ user.name } files={ files } avatar={ user.avatar } button={ user.button }/>
                <Search searchFunc={ searchItemAction }/>
                <List title={ 'Menu' } menuLinks={ menu } />
                <List title={ 'Галлерея' } menuLinks={ menuGallery } />
            </div>
        )
    }
}

Account.propTypes = propTypes;

export default Account;