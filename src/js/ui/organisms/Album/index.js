import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

import Photo from 'molecules/Photo'

const cn = bemHelper('album');


class Album extends Component {
    constructor(props){
        super(props);
    }

    _photoDisplay( photos, parrent, album ){
        if( photos.length ){
            let result = photos.map(( photo )=>{ 
                if( photo.display ){
                    const url = `${ parrent }/${ album }/${ photo.id }`
                    return <Photo 
                                key={ photo.id } 
                                title={ photo.title } 
                                image={ photo.image } 
                                preview={ this.props.preview }
                                url={ url }
                                size={ 4 }/>
                }
            })

            return result;
        }else {
            let itemsNotFound = <p className="album__content_not-found">Фото не найдены</p>
            return itemsNotFound;
        }
    }

    _photoCount( photos ) {
        let count = 0;
        if(photos.length){
            photos.map( ( item ) => {
                return ( !item.display ) ? count : ++count;
            } )
        } else {
            return count;
        }
        return count;
    }

    render(){
        const { photos, name, album, parrent } = this.props;

        let albumCount = this._photoCount( photos );
        let content = this._photoDisplay( photos, parrent, album );

        return (
            <div { ...cn('') }>
                <h2 { ...cn('caption') }>
                    { name }
                    <span { ...cn('count') }> ({ albumCount } фото)</span>
                </h2>
                <div { ...cn('content') }>
                    { content }
                </div>
                
            </div>
        )
    }
}

Album.propTypes = {
    photos: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired
}

Album.defaultProps = {
    photos: [],
    name: 'Безымянный альбом',
    album: 'undefined'
}

export default Album