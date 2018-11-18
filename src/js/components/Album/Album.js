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
                    return <Photo key={ photo.id } title={ photo.title } src={ photo.image }/>
                }
            })

            return result;
        }else {
            let itemsNotFound = <p className="items_not-found">Фото не найдены</p>
            return itemsNotFound;
        }
    }

    render(){
        const { photos, name } = this.props;
        let content = this._photoDisplay( photos );

        return (
            <div className="category">
            <h2>{ name }</h2>
                { content }
            </div>
        )
    }
}

Album.propTypes = propTypes;

export default Album