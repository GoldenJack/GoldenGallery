import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageOfGallery from 'pages/PageOfGallery';
import List from './pages/List';
import Photo from './pages/Photo';
import Album from './pages/Album';

const ROUTES = [
  {
    path: '/gallery',
    component: List
  },
  {
    path: '/gallery/:album',
    component: Album
  },
  {
    path: '/gallery/:album/:id',
    component: Photo
  }
];

const Gallery = () => (
  <PageOfGallery>
    {ROUTES.map(({ path, component: Component }) => (
      <Route
        key={path}
        exact
        path={path}
        component={Component}
      />
    ))}
  </PageOfGallery>
);

export default Gallery;
