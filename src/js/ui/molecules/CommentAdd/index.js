import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Avatar from 'molecules/Avatar';

const cn = bemHelper('comment-add');


class CommentAdd extends Component {
  constructor(props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleFocus = (e) => {
    const fake = e.target.nextElementSibling;
    if (!fake.classList.contains('hidden')) {
      fake.classList.add('hidden');
    }
  }

  handleBlur = (e) => {
    const fake = e.target.nextElementSibling;
    const text = e.target.innerText;
    if (fake.classList.contains('hidden' && text)) {
      fake.classList.remove('hidden');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { mix } = this.props;

    return (
      <div {...cn('', '', mix)}>
        <Avatar
          size="xs"
          mix={cn('avatar').className}
          image="img/avatar.png"
        />
        <form onSubmit={this.handleSubmit} {...cn('form')}>
          <div
            {...cn('textarea')}
            onClick={this.handleClick}
            onFocus={this.handleFocus}
            role="none"
            onBlur={this.handleBlur}
          />
          <span {...cn('fake')}>Оставьте свой комментарий...</span>
          <button {...cn('button')} type="submit">Д</button>
        </form>
      </div>
    );
  }
}

CommentAdd.propTypes = {
  mix: PropTypes.string
};

CommentAdd.defaultProps = {
  mix: ''
};

export default CommentAdd;
