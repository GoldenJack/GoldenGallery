import React, { Component } from 'react';
import GalleryStore from '../../stores';
import Photo from '../Photo/Photo';


class Category extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: this.props.data
        }
    }

    _photoDisplay(){
        let itemsNotFound;

        if(this.state.data.length){
            let result = this.state.data.map((item)=>
                <Photo key={ item.id } title={ item.title } src={ item.image } />
            )

            return result;
        }else {
            itemsNotFound = (!this.state.data.length) ? <p className="items_not-found">Фото не найдены</p> : ''
            return itemsNotFound;
        }
    }

    _onChange() {
        this.setState({ items: GalleryStore.getAllItems() });
    }
 
    componentWillMount() {
        GalleryStore.addChangeListener(this._onChange.bind(this));
    }
 
    componentWillUnmount() {
        GalleryStore.removeChangeListener(this._onChange.bind(this));
    }


    render(){
        let content = this._photoDisplay();
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