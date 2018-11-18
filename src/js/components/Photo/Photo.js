import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}


class Photo extends Component {
    constructor(props){
        super(props)
    }


    render(){
        const { title, src } = this.props;

        return (
            <div>
                <img src={ src }/>
                <p>{ title }</p>
            </div>
        )
    }
}

Photo.propTypes = propTypes;

export default Photo;