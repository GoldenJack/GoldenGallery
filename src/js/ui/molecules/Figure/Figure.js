import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Image } from 'atoms' 


class Figure extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { image } = this.props;

        return (
            <div className="figure">
                <Image src={ image } className="figure__image" />
            </div>
        )
    }
}