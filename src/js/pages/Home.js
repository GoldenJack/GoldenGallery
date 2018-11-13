import React, { Component } from 'react';
import GalleryStore from '../stores';

import Category from '../components/Category/Category'

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            gallery: GalleryStore.getAllItems()
        }
    }

    _onChange() {
        this.setState({ gallery: GalleryStore.getAllItems() });
        console.log(this.state.gallery)
    }
 
    componentWillMount() {
        GalleryStore.addChangeListener(this._onChange.bind(this));
    }
 
    componentWillUnmount() {
        GalleryStore.removeChangeListener(this._onChange.bind(this));
    }

    _galleryCategory(){

        if(this.state.gallery){
            let result = this.state.gallery.map((item)=>
                <Category key={ item.id } name={ item.ru } data={ item.photo } />
            )
            return result;
        } else {
            return (
                <p>К сожалению ничего не удалось найти</p>
            )
        }
    }

    render(){
        let content = this._galleryCategory();

        return (
            <div>
                { content }
            </div>
        )
    }
}

export default Home