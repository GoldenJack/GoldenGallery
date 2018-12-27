import React, { Component, Fragment } from 'react';
import Album from 'organisms/Album';
import PropTypes from 'prop-types';
import Preloader from 'atoms/Preloader';
import './style.scss';


class GalleryList extends Component {
  componentDidMount() {
    const { loaded, loading, getGallery } = this.props;
    !loaded && !loading && getGallery();
  }

  _galleryAlbum(gallery) {
    const { previewOpen, size } = this.props;

    if (gallery) {
      const result = gallery.map((album) => (
        <Album
          key={album.key}
          name={album.titleRu}
          photos={album.photos}
          preview={previewOpen}
          album={album.id}
          size={size}
        />
      ));

      return result;
    } else {
      return (
        <p>К сожалению ничего не удалось найти</p>
      );
    }
  }

  render() {
    const { loading, gallery } = this.props;
    const album = !loading && this._galleryAlbum(gallery);

    return (
      <Fragment>
        <Preloader loading={loading} />
        {!loading && (
          <div className="gallery animated fadeIn">
              { album }
          </div>
        )}
      </Fragment>
    );
  }
}

GalleryList.propTypes = {
  gallery: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  getGallery: PropTypes.func.isRequired,
  previewOpen: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired
};

export default GalleryList;
