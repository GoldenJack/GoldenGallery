import React from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('info-photo');


const InfoPhoto = ({ title }) => (
  <div {...cn('')}>
    <h2>{ title }</h2>
  </div>
);

InfoPhoto.propTypes = {
  title: PropTypes.string
};

InfoPhoto.defaultProps = {
  title: 'Untitle'
};

export default InfoPhoto;
