import React, { Component } from 'react';
import Category from '../components/Category/Category';



class Home extends Component {
    constructor(props){
        super(props);
    }

    _galleryCategory( data ){

        if(data){
            let result = data.map((item)=>
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
        const { data } = [];
        let content = this._galleryCategory();

        return (
            <div>
                { content }
            </div>
        )
    }
}

export default Home