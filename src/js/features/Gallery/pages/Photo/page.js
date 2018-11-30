import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bemHelper from 'utils/bem-helper'
import './style.scss'

import Figure from 'molecules/Figure'
import CommentList from 'organisms/CommentList'
import PhotoInfo from 'atoms/PhotoInfo'

const cn = bemHelper('photo-page');


class PhotoPage extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const { getPhoto, loaded } = this.props;
        const { album, id } = this.props.match.params;
        !loaded && getPhoto( album, id );
    }

    render(){
        const { photo: { image, title, comments, countLikes } } = this.props;
        return (
            <div { ...cn('') }>
                <div { ...cn('content') }>
                    <Figure image={ image } />
                    <PhotoInfo title={ title } />
                </div>
                
                <CommentList 
                    mix={ cn('comments').className } 
                    comments={ comments }
                    modify={ 'fixed' }
                    countLikes={ countLikes }/>
            </div>
        )
    }
}

PhotoPage.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    comments: PropTypes.array
};
PhotoPage.defaultProps = {
    title: '',
    image: '',
    comments: []
};


export default PhotoPage;