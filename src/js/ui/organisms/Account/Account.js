import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from 'atoms/Search';
import User from 'organisms/User';
import SideMenu from 'molecules/SideMenu';
import Range from 'atoms/Range';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('account');


class Account extends Component {
    _getMenu() {
        const { gallery } = this.props;
        let menuGallery = [];
        gallery.map( ( item ) => {
            return menuGallery.push({
                "title": item.titleRu,
                "pathName": `/gallery/${item.id}`,
                "key": item.id
            })
        } ) 
        return menuGallery;
    }

    render(){
        const { user, size, gallery, reSizeGallery, loaded } = this.props;
        const subMenu = loaded && this._getMenu();

        let menu = [
            {
                "title": 'Галлерея', 
                "pathName": '/gallery', 
                "key": 0
            }
        ]

        return (
            <div {...cn()}>
                <User 
                    name={ user.name }
                    avatar={ user.avatar } 
                    button={ user.button }
                    recount={ gallery }/>

                <Search />
                <SideMenu isSubMenu={true} loaded={loaded} subMenu={subMenu} menu={ menu } />

                <Range reSize={ reSizeGallery }/>
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