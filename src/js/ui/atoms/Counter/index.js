import React from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('counter');

const typeOfRecount = (recount) => {
  return (recount instanceof Array) ? 'Array' : typeof recount;
};

const countFiles = (recount, arr) => {
  let count = 0;
  const type = typeOfRecount(recount).toLowerCase();

  switch (type) {
    case 'array':
      if (recount.length) {
        if (arr) {
          recount.map((item) => {
            count += item[arr].length;
            return count;
          });
        } else {
          count = recount.length;
          return count;
        }
      }
      return count;
    case 'object':
      count = recount.length;
      return count;
    case 'number':
      count = recount;
      return count;
    case 'string':
      count = recount;
      return count;
  }
  return count;
};

const Counter = ({ mix, recount, arr }) => (
  <span {...cn('', '', mix)}>{ countFiles(recount, arr) || 0 }</span>
);

Counter.propTypes = {
  recount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array]),
  mix: PropTypes.string,
  arr: PropTypes.string
};

Counter.defaultProps = {
  recount: 0,
  mix: '',
  arr: ''
};

export default Counter;
