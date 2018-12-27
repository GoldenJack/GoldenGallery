import React from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import { NavLink } from 'react-router-dom';

const cn = bemHelper('list');

const generateMenu = (menu) => {
  return menu.map((item) => (
    <NavLink
      key={item.key}
      to={item.pathName}
      className="list__item"
      activeClassName="list__item_active"
    >
      { item.title }
    </NavLink>
  ));
};

const Menu = ({ title, menu }) => (
  <div {...cn('')}>
    <div {...cn('caption')}>
      <h4 {...cn('title')}>{ title }</h4>
    </div>
    <div {...cn('list')}>
      { generateMenu(menu) }
    </div>
  </div>
);

Menu.propTypes = {
  title: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired
};


export default Menu;
