import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import Album from 'organisms/Album';
import Preloader from 'atoms/Preloader';

import './style.scss';

const cn = bemHelper('album-page');

class AlbumPage extends Component {
  componentDidMount() {
    const { loaded, getAlbum, match: { params: { album } } } = this.props;
    !loaded && getAlbum(album);
  }

  componentDidUpdate(prevProps) {
    const { getAlbum, match: { params: { album } } } = this.props;
    const prevAlbum = prevProps.match.params.album;
    prevAlbum !== album && getAlbum(album);
  }

  _renderAlbum() {
    const { previewOpen, size } = this.props;
    const album = this.props.album[0];
    if (album) {
      const result = (
        <Album
          key={album.key}
          name={album.titleRu}
          photos={album.photos}
          preview={previewOpen}
          album={album.id}
          size={size}
        />
      );
      return result;
    } else {
      return (
        <p>К сожалению ничего не удалось найти</p>
      );
    }
  }

  render() {
    const { loading } = this.props;
    const album = !loading && this._renderAlbum();
    return (
      <Fragment>
        <Preloader loading={loading} />
        { !loading && (
          <div {...cn('', '', 'animated fadeIn')}>
              { album }
          </div>
        ) }
      </Fragment>
    );
  }
}

AlbumPage.propTypes = {
  loaded: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  getAlbum: PropTypes.func.isRequired,
  previewOpen: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired
};

export default AlbumPage;
