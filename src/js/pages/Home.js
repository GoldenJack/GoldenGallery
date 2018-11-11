import React, { Component } from 'react';
import Photo from '../components/Photo/Photo';
import PhotoStore from '../stores';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            items: PhotoStore.getAllItems()
        }
    }

    _photoDisplay(){
        let itemsNotFound;

        if(this.state.items.length){
            let result = this.state.items.map((item)=>
                <Photo key={ item.id } id={ item.id } title={ item.title } src={ item.src } />
            )

            return result;
        }else {
            itemsNotFound = (!items.length) ? <p className="items_not-found">Фото не найдены</p> : 'yes'
            return itemsNotFound;
        }
    }


    render(){
        let items = this._photoDisplay();
        return (
            <div>
                <h1>Фотографии</h1>
                <div>
                    { items }
                </div>
            </div>
        )
    }
}

export default Home