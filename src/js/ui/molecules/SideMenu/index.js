import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Menu from 'atoms/Menu';

const SideMenu = ({ title, menu, isSubMenu, subMenuTitle, subMenu, loaded }) => (
  <Fragment>
    <Menu title={title} menu={menu} />
    { isSubMenu && loaded && (
      <Menu title={subMenuTitle} menu={subMenu} />
    ) }
  </Fragment>
);

SideMenu.propTypes = {
  title: PropTypes.string,
  menu: PropTypes.array.isRequired,
  isSubMenu: PropTypes.bool,
  subMenuTitle: PropTypes.string,
  subMenu: PropTypes.array,
  loaded: PropTypes.bool.isRequired
};

SideMenu.defaultProps = {
  title: 'Меню',
  isSubMenu: false,
  subMenuTitle: 'Категории',
  subMenu: []
};

export default SideMenu;
