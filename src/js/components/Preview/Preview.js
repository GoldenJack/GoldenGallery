import React, { Component } from 'react';

export default class Preview extends Component {
    constructor(props){
        super(props);
    }

    render() {        
        return (
            <div className="preview-box">
                <div className="preview-box__wrap">
                    <img src={ this.props.src } className="preview-box__image"/>
                </div>
            </div>
        )
    }
}