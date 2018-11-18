import React, { Component } from 'react'
import Category from '../components/Category/Category'

import { connect } from 'react-redux'
import { clickItem } from '../actions/accountActions'



class Home extends Component {
    constructor(props){
        super(props);
    }

    _galleryCategory( data ){
        if(data){
            let result = data.map((item)=>
                <Category key={ item.id } name={ item.ru } data={ item.photo }/>
            )
            
            return result;
        } else {
            return (
                <p>К сожалению ничего не удалось найти</p>
            )
        }
    }

    btnOnClick(e){
        e.preventDefault();

        this.props.clickItemAction();
    }

    render(){
        const { gallery } = this.props;

        let content = this._galleryCategory( gallery );

        return (
            <div>
                { content }
            </div>
        )
    }
}

const mapStateToProps = store => {
    return { 
        gallery: store.galleryReducere.gallery
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clickItemAction: e => dispatch(clickItem(e))
    }
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Home)