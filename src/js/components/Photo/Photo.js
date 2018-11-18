import React, { Component } from 'react'


export default class Photo extends Component {
    constructor(props){
        super(props)

        this.btnOnClick = this.btnOnClick.bind(this)
    }

    btnOnClick(e){
        e.preventDefault();
        this.props.clickItem();
    }

    render(){
        const { title, src, id } = this.props;
        let style = {
            flex: '0 0 30%',
            padding: '15px'
        }
        let img = {
            width: '100%',
            marginBottom: '14px'
        }
        return (
            <div id={ id } style={ style }>
                <img src={ src } style={ img }/>
                <p>{ title }</p>
                <a href="#" className="delete" onClick={ this.btnOnClick }>Delete</a>
            </div>
        )
    }
}