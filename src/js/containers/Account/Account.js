import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchItem } from '../../actions/accountActions'
import PropTypes from 'prop-types'

import Search from '../../components/Search/Search'
import User from '../../components/User/User'
import List from '../../components/List/List'

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
                        "title": item.ru,
                        "pathName": `/gallery/${item.en.toLowerCase()}`,
                        "id": item.id
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
                "id": 0
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

const mapStateToProps = store => {
    return { 
        gallery: store.galleryReducere.gallery,
        user: store.userReducere.user
    }
}


const mapDispatchToProps = dispatch => {
    return {
        searchItemAction: e => dispatch(searchItem(e))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Account)