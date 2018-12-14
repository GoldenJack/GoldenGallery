import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Avatar from 'molecules/Avatar';
import Counter from 'atoms/Counter';
import ButtonUpload from 'atoms/ButtonUpload';

const cn = bemHelper('user');


class User extends Component {
  componentDidMount() {
    const { name } = this.props;
  }

  render() {
    const { name, recount, button, avatar } = this.props;
    const arr = 'photos';

    const uploadUrl = '/upload';
    const size = 'md';
    return (
      <div {...cn('')}>
        <Avatar image={avatar} size={size} mix={cn('avatar').className} />
        <Link to="/edit" className="user__name">{ name }</Link>
        <Counter recount={recount} arr={arr} mix={cn('counter').className} />
        <ButtonUpload button={button} mix={cn('btn').className} to={uploadUrl} />
      </div>
    );
  }
}

User.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  recount: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  button: PropTypes.string
};

User.defaultProps = {
  avatar: '',
  name: 'Безымянный',
  recount: 0,
  button: 'Создать'
};

export default User;
