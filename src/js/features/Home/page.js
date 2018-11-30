import React, { Component } from 'react';

import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('home');

class Home extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div>
                <p>Home</p>
            </div>
        )
    }
}

export default Home;