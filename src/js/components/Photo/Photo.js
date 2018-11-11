import React, { Component } from 'react'
import PhotoStore from '../../stores';


export default class Photo extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: this.props.title,
            src: this.props.src,
            id: this.props.id
        }
    }

    deleteItem(id) {
        event.preventDefault();
        PhotoStore._deleteItem(id);
    }

    render(){
        return (
            <div className="" id={ this.state.id }>
                <img src={ this.state.src }/>
                <p>{ this.state.title }</p>
                <a href="#" className="delete" onClick={ this.deleteItem.bind(this, this.state.id) }>Delete</a>
            </div>
        )
    }
}