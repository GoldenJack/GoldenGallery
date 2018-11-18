import React, { Component } from 'react'
import Category from '../components/Category/Category'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clickItem } from '../actions/accountActions'

const propTypes = {
    gallery: PropTypes.array
}

class Home extends Component {
    constructor(props){
        super(props);
    }

    _galleryCategory( gallery ){
        if( gallery ){
            let result = gallery.map(( galleryCategory )=>
                <Category 
                    key={ galleryCategory.id } 
                    name={ galleryCategory.ru } 
                    photos={ galleryCategory.photos }/>
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

Home.propTypes = propTypes;

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