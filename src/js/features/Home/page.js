import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'atoms/Button';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('home');

class Home extends Component {
  componentDidMount() {

  }


  render() {
    const { showAuth } = this.props;
    return (
      <div {...cn()}>
        <p>Home</p>
        <Button text="Войти" effect={showAuth} />
      </div>
    );
  }
}

Home.propTypes = {
  showAuth: PropTypes.func
};

Home.defaultProps = {
  showAuth: () => {}
};

export default Home;
