import React, { Component } from 'react';
import Photo from '../Photo/Photo';


class Category extends Component {
    constructor(props){
        super(props);
    }

    _photoDisplay(data){
        let itemsNotFound;
        if(data.length){
            let result = data.map((item)=>{ 
                if(item.display){
                    return <Photo key={ item.id } title={ item.title } src={ item.image }/>
                }
            }
            )

            return result;
        }else {
            itemsNotFound = (!data.length) ? <p className="items_not-found">Фото не найдены</p> : ''
            return itemsNotFound;
        }
    }

    render(){
        const { data } = this.props;

        let content = this._photoDisplay(data);
        let style = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        }
        let caption = {
            flex: '1 1 100%'
        }

        return (
            <div className="category" style={ style }>
            <h2 style={ caption }>{ this.props.name }</h2>
                { content }
            </div>
        )
    }
}

export default Category