import React, { Fragment } from 'react';
import { Route } from 'react-router';
import PropTypes from 'prop-types';
import List from './pages/List';
import Photo from './pages/Photo';

const ROUTES = [
    {
        path: '/gallery',
        component: List
    },
    {
        path: '/gallery/:album/:id',
        component: Photo
    }
];
  
const Gallery = () => (
    <Fragment>
        {ROUTES.map(({ path, component: Component }) => (
            <Route
                key={path}
                exact
                path={path}
                component={Component}
            />
        ))}
    </Fragment>
);

export default Gallery;