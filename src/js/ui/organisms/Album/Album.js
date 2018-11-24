import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'

import Photo from 'molecules/Photo/Photo'
import Counter from 'atoms/Counter'

const cn = bemHelper('album');

const propTypes = {
    photos: PropTypes.array,
    name: PropTypes.string.isRequired,
    album: PropTypes.string
}


class Album extends Component {
    constructor(props){
        super(props);
    }

    _photoDisplay( photos, album ){
        if( photos.length ){
            let result = photos.map(( photo )=>{ 
                if( photo.display ){
                    return <Photo 
                                key={ photo.id } 
                                title={ photo.title } 
                                image={ photo.image } 
                                preview={ this.props.preview }
                                number={ photo.id }
                                album={ album }/>
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
        const { photos, name, album } = this.props;

        let albumCount = this._photoCount( photos );
        let content = this._photoDisplay( photos, album );

        return (
            <div className="album">
                <h2 className="album__caption">
                    { name }
                    <span className="album__count"> ({ albumCount } фото)</span>
                </h2>
                <div className="album__content">
                    { content }
                </div>
                
            </div>
        )
    }
}

Album.propTypes = propTypes;

export default Album