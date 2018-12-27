import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('search');

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    const { search } = this.props;
    this.setState({
      value: e.target.value
    });
    search(e.target.value);
  }

  render() {
    const { value, loading } = this.state;
    // loading fix issue
    return (
      <div {...cn('')}>
        <form action="" {...cn('form')}>
          <div {...cn('icon')}>
            <input
              type="text"
              {...cn('input')}
              placeholder="Найти..."
              disabled={loading}
              value={value}
              onChange={this._handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Search;
