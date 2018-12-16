import React from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

import Form from 'molecules/Form';
import Input from 'atoms/Input';
import Button from 'atoms/Button';

const cn = bemHelper('auth');

const Auth = ({ hideAuth, onFieldChange, login, password }) => (
  <div {...cn()}>
    <div {...cn('overlay')} role="none" onClick={hideAuth} />
    <div {...cn('modal')}>
      <Form mix={cn('form').className}>
        <Input
          type="text"
          mix={cn('input').className}
          text="Введите логин"
          onChange={onFieldChange('login')}
          value={login}
        />
        <Input
          type="password"
          mix={cn('input').className}
          text="Введите пароль"
          onChange={onFieldChange('password')}
          value={password}
        />
        <div {...cn('buttons')}>
          <Button text="Войти" mix={cn('button').className} />
        </div>
      </Form>
    </div>
  </div>
);

export default Auth;
