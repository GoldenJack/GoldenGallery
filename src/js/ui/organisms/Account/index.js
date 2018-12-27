import React from 'react';
import PropTypes from 'prop-types';
import Search from 'atoms/Search';
import User from 'organisms/User';
import SideMenu from 'molecules/SideMenu';
import Range from 'atoms/Range';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('account');


const Account = ({
  user,
  size,
  gSize,
  gSearch,
  loading,
  subenu,
  menu
}) => (
  <div {...cn()}>
    <User
      name={user.name}
      avatar={user.avatar}
      button={user.button}
    />
    {gSearch && (
      <Search search={gSearch} loading={loading} />
    )}
    {/* <SideMenu isSubMenu loaded={loaded} subMenu={subMenu} menu={menu} /> */}
    {gSize && (
      <Range reSize={gSize} value={size} />
    )}
  </div>
);

Account.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object,
  gallery: PropTypes.array,
  size: PropTypes.number,
  gSearch: PropTypes.func,
  gSize: PropTypes.func
};

Account.defaultProps = {
  user: {},
  gallery: [],
  size: 3,
  gSearch: () => {},
  gSize: () => {}
};

export default Account;
