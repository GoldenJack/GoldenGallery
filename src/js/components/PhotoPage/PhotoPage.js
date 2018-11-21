import React, { Component } from 'react'
import PropTypes from 'prop-types'


class PhotoPage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { number } = this.props.match.params;

        return (
            <div>
                <p>Страница картинки номер { number }</p>
            </div>
        )
    }
}

export default PhotoPage;