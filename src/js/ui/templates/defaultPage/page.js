import React from 'react';
import PropTypes from 'prop-types';
import Account from 'organisms/Account';
import bemHelper from 'utils/bem-helper';

import './style.scss';


const cn = bemHelper('page');


const defaultPage = ({ children, theme }) => {
  return (
    <div {...cn('', theme, 'container flex')}>
      <Account />
      <div className="content">
        { children }
      </div>
    </div>
  );
};

defaultPage.propTypes = {
  children: PropTypes.object.isRequired,
  theme: PropTypes.oneOf(['default'])
};

defaultPage.defaultProps = {
  theme: 'default'
};

export default defaultPage;
