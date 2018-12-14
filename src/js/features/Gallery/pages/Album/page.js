import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import Album from 'organisms/Album';
import Preloader from 'atoms/Preloader';

import './style.scss';

const cn = bemHelper('album-page');

class AlbumPage extends Component {
  state = {
    albumId: this.props.match.params.album
  }
  componentDidMount(){
    const { loaded, getAlbum } = this.props;
    const { albumId } = this.state;
    !loaded && getAlbum(albumId);
  }

  _renderAlbum(){
    const album = this.props.album[0];
    if( album ){
      let result = (
        <Album 
          key={ album.key } 
          name={ album.titleRu } 
          photos={ album.photos }
          // preview={ this.props.previewOpen }
          album={ album.id }
          size={ this.props.size }
          parrent={ 'gallery' }/>
      )
      
      return result;
  } else {
      return (
          <p>К сожалению ничего не удалось найти</p>
      )
  }
  }

  render(){
    const { loading } = this.props;
    const album = !loading && this._renderAlbum();
    return (
      <Fragment >
        <Preloader loading={ loading } />
        { !loading && (
            <div {...cn('', '', 'animated fadeIn')}>
                { album }
            </div>
        ) }
      </Fragment>
    )
  }
}

export default AlbumPage;