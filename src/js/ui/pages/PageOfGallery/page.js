import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Account from 'organisms/Account';


const PageOfGallery = ({
  loading,
  children,
  reSizeGallery,
  getGalleryByTitle
}) => (
  <Fragment>
    <Account
      gSize={reSizeGallery}
      gSearch={getGalleryByTitle}
      loading={loading}
    />
    <div className="content">
      { children }
    </div>
  </Fragment>
);

PageOfGallery.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
  reSizeGallery: PropTypes.func.isRequired,
  getGalleryByTitle: PropTypes.func.isRequired
};

export default PageOfGallery;
