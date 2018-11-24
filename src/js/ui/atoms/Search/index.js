import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

const cn = bemHelper('search');

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
            <div { ...cn('') }>
                <form action="" { ...cn('form') }>
                    <div { ...cn('icon') }>
                        <input type="text" 
                        { ...cn('input') } 
                        placeholder="Найти изображения" 
                        value={ this.state.value }
                        onChange={ this._handleChange }/>
                    </div>
                </form>
            </div>
        )
    }
}

Search.propTypes = {
    searchFunc: PropTypes.func.isRequired
}

export default Search;