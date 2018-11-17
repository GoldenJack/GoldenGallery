import React, { Component } from 'react';


export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }

        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(){
        event.preventDefault();
        this.setState({ value: event.target.value })
    }

    render(){
        return (
            <div className="home__search search">
                <form action="" className="search__form">
                    <div className="search__icon">
                        <input type="text" 
                        className="search__input" 
                        placeholder="Найти изображения" 
                        value={ this.state.value }
                        onChange={ this._handleChange }/>
                    </div>
                </form>
            </div>
        )
    }
}