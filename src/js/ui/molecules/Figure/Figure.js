import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

import Image from 'atoms/Image/index' 


class Figure extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { image } = this.props;
        
        return (
            <div className="figure">
                <Image image={ image } className="figure__image" />
            </div>
        )
    }
}

export default Figure;