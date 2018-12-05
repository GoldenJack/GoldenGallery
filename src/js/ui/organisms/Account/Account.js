import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Search from 'atoms/Search'
import User from 'organisms/User'
import SideMenu from 'molecules/SideMenu';


class Account extends Component {
    // _getMenu( gallery ) {
    //     let menuGallery = [];
    //     gallery.map( ( item ) => {
    //         return menuGallery.push({
    //                     "title": item.titleRu,
    //                     "pathName": `/gallery/${item.id}`,
    //                     "key": item.key
    //                 })
    //     } ) 
    //     return menuGallery;
    // }

    render(){
        const { user, gallery } = this.props;

        let menu = [
            {
                "title": 'Галлерея', 
                "pathName": '/gallery', 
                "key": 0
            }
        ]
        // let menuGallery = this._getMenu( gallery )

        return (
            <div className="account">
                <User 
                    name={ user.name }
                    avatar={ user.avatar } 
                    button={ user.button }
                    recount={ gallery }/>

                <Search />
                <SideMenu menu={ menu } />
            </div>
        )
    }
}

Account.propTypes = {
    user: PropTypes.object.isRequired,
    gallery: PropTypes.array.isRequired
};

Account.defaultProps = {
    user: {},
    gallery: []
}

export default Account;