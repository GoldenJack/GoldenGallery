import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from 'atoms/Search';
import User from 'organisms/User';
import SideMenu from 'molecules/SideMenu';
import Range from 'atoms/Range';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('account');


const Account = ({ user, size, gallery, reSizeGallery, loaded, subenu, menu }) => (
  <div {...cn()}>
    <User
      name={user.name}
      avatar={user.avatar}
      button={user.button}
      recount={gallery}
    />
    <Search />
    {/* <SideMenu isSubMenu loaded={loaded} subMenu={subMenu} menu={menu} /> */}
    <Range reSize={reSizeGallery} value={size} />
  </div>
);

Account.propTypes = {
  user: PropTypes.object,
  gallery: PropTypes.array,
  size: PropTypes.number
};

Account.defaultProps = {
  user: {},
  gallery: [],
  size: 3
};

export default Account;
