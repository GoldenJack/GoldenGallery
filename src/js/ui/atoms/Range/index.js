import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('range');

class Range extends Component {
  state = {
    range: null
  }

  nowRange(){
    const { value } = this.props;
    this.setState({
      range: value ? value : 0
    })
  }

  changeRange = () => (e) => {
    const { reSize } = this.props;
    this.setState({
      range: e.target.value
    })
    reSize(e.target.value);
  }

  render(){
    const { value } = this.props;

    return (
      <input
        { ...cn('') }
        type="range" 
        min="1" 
        max="10" 
        value={ value } 
        onChange={ this.changeRange(value) } 
        step="1" />
    )
  }
  
}

export default Range;