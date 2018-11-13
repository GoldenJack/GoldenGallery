import React, { Component } from 'react'


export default class Photo extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: this.props.title,
            src: this.props.src,
            id: this.props.id
        }
    }

    render(){
        let style = {
            flex: '0 0 30%',
            padding: '15px'
        }
        let img = {
            width: '100%',
            marginBottom: '14px'
        }
        return (
            <div id={ this.state.id } style={ style }>
                <img src={ this.state.src } style={ img }/>
                <p>{ this.state.title }</p>
                <a href="#" className="delete">Delete</a>
            </div>
        )
    }
}