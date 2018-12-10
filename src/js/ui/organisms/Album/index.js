import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Photo from 'molecules/Photo';

const cn = bemHelper('album');


class Album extends Component {
  _photoRender(photos, parrent, album) {
    const { preview, size } = this.props;
    if (photos.length) {
      const result = photos.map((photo) => {
        if (photo.display) {
          const url = `${parrent}/${album}/${photo.id}`;
          return (
            <Photo
              key={photo.id}
              title={photo.title}
              image={photo.image}
              preview={preview}
              url={url}
              size={size}
            />
          );
        }
        return null;
      });
      return result;
    } else {
      const itemsNotFound = <p className="album__content_not-found">Фото не найдены</p>;
      return itemsNotFound;
    }
  }

  _photoCount(photos) {
    let count = 0;
    if (photos.length) {
      photos.map((item) => {
        return (!item.display) ? count : ++count;
      });
    } else {
      return count;
    }
    return count;
  }

  render() {
    const { photos, name, album, parrent } = this.props;

    const albumCount = this._photoCount(photos);
    const content = this._photoRender(photos, parrent, album);

    return (
      <div {...cn('')}>
        <h2 {...cn('caption')}>
          { name }
          <span {...cn('count')}> ({ albumCount } фото)</span>
        </h2>
        <div {...cn('content')}>
          { content }
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  photos: PropTypes.array,
  name: PropTypes.string,
  album: PropTypes.string,
  preview: PropTypes.func,
  parrent: PropTypes.string,
  size: PropTypes.onOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
};

Album.defaultProps = {
  photos: [],
  name: 'Безымянный альбом',
  album: 'undefined',
  parrent: 'undefined',
  preview: () => {}
};

export default Album;
