import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('range');

class Range extends Component {
  state = {
    range: null
  }

  nowRange() {
    const { value } = this.props;
    this.setState({
      range: value || 0
    });
  }

  changeRange = (size) => (e) => {
    const { reSize } = this.props;
    const value = size || e.target.value;
    this.setState({
      range: value
    });
    reSize(value);
  }

  render() {
    const { range } = this.state;

    return (
      <div {...cn()}>
        <div {...cn('btn_smaller')} role="none" onClick={this.changeRange(1)} />
        <input
          {...cn('input')}
          type="range"
          min="1"
          max="10"
          value={range}
          onChange={this.changeRange()}
          step="1"
        />
        <div {...cn('btn_bigger')} role="none" onClick={this.changeRange(10)} />
      </div>
    );
  }
}

Range.propTypes = {
  value: PropTypes.number,
  reSize: PropTypes.func.isRequired
};

Range.defaultProps = {
  value: 0
};

export default Range;
