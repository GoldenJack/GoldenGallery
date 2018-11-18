import React, { Component } from 'react'
import Album from '../../components/Album/Album'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { clickItem } from '../../actions/accountActions'

const propTypes = {
    gallery: PropTypes.array
}

class Home extends Component {
    constructor(props){
        super(props);
    }

    _galleryAlbum( gallery ){
        if( gallery ){
            let result = gallery.map(( galleryAlbum )=>
                <Album 
                    key={ galleryAlbum.id } 
                    name={ galleryAlbum.ru } 
                    photos={ galleryAlbum.photos }/>
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

        let content = this._galleryAlbum( gallery );

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