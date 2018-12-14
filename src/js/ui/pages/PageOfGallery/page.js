import React, { Fragment } from 'react';

import Account from 'organisms/Account';


const PageOfGallery = ({ children }) => (
  <Fragment>
    <Account />
    <div className="content">
      { children }
    </div>
  </Fragment>
);

export default PageOfGallery;
