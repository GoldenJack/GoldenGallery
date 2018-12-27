import React from 'react';
import PropTypes from 'prop-types';

import DefaultPage from 'templates/defaultPage'

const Layout = ({ children, ...props }) => (
  <DefaultPage {...props}>
    { children }
  </DefaultPage>
);

Layout.propTypes = {
  children: PropTypes.object.isRequired
}

export default Layout;
