import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    searchFunc: PropTypes.func.isRequired
}

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }

        this._handleChange = this._handleChange.bind(this);
    }

    _handleChange(){
        event.preventDefault();
        const { searchFunc } = this.props;

        this.setState({ value: event.target.value })

        searchFunc(event.target.value);
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

Search.propTypes = propTypes;

export default Search;