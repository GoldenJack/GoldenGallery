import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import Button from 'atoms/Button';

const cn = bemHelper('login');

class Login extends Component {
  state = {
    login: '1',
    pass: '1'
  }

  changeInput = (e) => {
    const value = e.currentTarget.value;
    this.setState({
      [name]: value
    })
  }

  render(){
    const { login, pass } = this.state;
    return (
      <div { ...cn() }>
        <form { ...cn('form') }>
          <input 
            type="text" 
            value={ login } 
            placeholder="Имя пользователя" 
            onChange={ this.changeInput }
          />
          <input 
            type="password" 
            value={ pass } 
            placeholder="*********" 
            nChange={ this.changeInput }
          />
          <Button type="form" button="Войти"></Button>
        </form>
      </div>
    )
  }
}

export default Login;