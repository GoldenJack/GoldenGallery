import React, { Component } from 'react'

import { connect } from 'react-redux'
import { searchItem } from '../../actions/accountActions'



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
        this.setState({ value: event.target.value })

        this.props.searchItemAction(event.target.value)
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

const mapStateToProps = store => {
    return { 
        gallery: store.galleryReducere.gallery
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchItemAction: e => dispatch(searchItem(e))
    }
}

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(Search)