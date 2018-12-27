import React from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';

import Like from 'atoms/Like';
import './style.scss';

const cn = bemHelper('data-bar');

const DataBar = ({ countLikes }) => (
  <div {...cn('')}>
    <Like countLikes={countLikes} mix={cn('like').className} />
  </div>
);

DataBar.propTypes = {
  countLikes: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

DataBar.defaultProps = {
  countLikes: 0
};

export default DataBar;
