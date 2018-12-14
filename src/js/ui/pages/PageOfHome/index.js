import React, { Fragment } from 'react';

const PageOfGallery = ({ children }) => (
  <Fragment>
    <div className="content">
      { children }
    </div>
  </Fragment>
);

export default PageOfGallery;
