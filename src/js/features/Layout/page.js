import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

import DefaultPage from 'templates/defaultPage'

const Layout = ({ children, ...props }) => (
    <DefaultPage { ...props }>
        { children }
    </DefaultPage>
);



export default Layout;
