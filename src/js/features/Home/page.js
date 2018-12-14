import React, { Component } from 'react';

import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('home');

class Home extends Component {
  componentDidMount() {
    const { loaded, getHome } = this.props;
    !loaded && getHome();
  }
  render(){
    const { home: { value } } = this.props;
    return (
      <div>
        <p>{ value }</p>
      </div>
    )
  }
}

export default Home;