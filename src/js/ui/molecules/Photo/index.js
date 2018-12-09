import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
// import Croppie from 'croppie';
import { Link } from 'react-router-dom';
import Image from 'atoms/Image';
// import Icon from 'atoms/Icon';

import './style.scss';

const cn = bemHelper('photo');


class Photo extends Component {
  constructor(props) {
    super(props);

    this.photo = React.createRef();
  }


  render() {
    const { title, image, preview, size, url } = this.props;

    return (
      <div
        {...cn('', size.toString(), 'animated jello')}
        ref={this.photo}
      >
        <div {...cn('content')}>
          <Image image={image} mix={cn('image').className} preview={preview} />
          <div {...cn('info')}>
            <Link to={url} {...cn('info-title')}>
              { title }
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

Photo.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string,
  preview: PropTypes.func,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
};

Photo.defaultProps = {
  url: '',
  preview: () => {},
  size: 3
};

export default Photo;
