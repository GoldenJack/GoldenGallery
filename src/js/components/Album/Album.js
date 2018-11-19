import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Photo from '../Photo/Photo'

const propTypes = {
    photos: PropTypes.array,
    name: PropTypes.string.isRequired
}


class Album extends Component {
    constructor(props){
        super(props);

        
    }

    _photoDisplay( photos ){
        if( photos.length ){
            let result = photos.map(( photo )=>{ 
                if( photo.display ){
                    return <Photo 
                                key={ photo.id } 
                                title={ photo.title } 
                                src={ photo.image } 
                                preview={ this.props.preview }/>
                }
            })

            return result;
        }else {
            let itemsNotFound = <p className="album__content_not-found">Фото не найдены</p>
            return itemsNotFound;
        }
    }

    render(){
        const { photos, name } = this.props;
        let albumCount = photos.length;
        let content = this._photoDisplay( photos );

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