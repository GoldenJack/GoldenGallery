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
  render(){
    const { 
      user, 
      gallery, 
      reSizeGallery, 
      loaded,
      isSubMenu,
      subMenu,
      menu  
    } = this.props;

    return (
      <div {...cn()}>
        <User 
          name={ user.name }
          avatar={ user.avatar } 
          button={ user.button }
          recount={ gallery }
        />
        <Search />
        <SideMenu 
            isSubMenu={isSubMenu} 
            loaded={loaded} 
            subMenu={subMenu} 
            menu={ menu } 
        />
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