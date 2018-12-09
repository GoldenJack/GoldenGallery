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
    e.preventDefault();
    const { getGalleryByTitle } = this.props;

    this.setState({ value: e.target.value });

    getGalleryByTitle(e.target.value);
  }

  render() {
    const { value } = this.state;
    return (
      <div {...cn('')}>
        <form action="" {...cn('form')}>
          <div {...cn('icon')}>
            <input
              type="text"
              {...cn('input')}
              placeholder="Найти изображения"
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
  getGalleryByTitle: PropTypes.func.isRequired
};

export default Search;
