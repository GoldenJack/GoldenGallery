import React, { Component, Fragment } from 'react';
import Auth from 'organisms/Auth';


const withAuth = WrappedComponent => class extends Component {
  state = {
    visible: false,
    animated: 'slideInDown'
  };

  showAuth = () => {
    this.setState({
      visible: true
    });
  }

  hideAuth = () => {
    this.setState({
      visible: false
    });
  }

  render() {
    const { ...wrappedComponentProps } = this.props;
    const { visible } = this.state;

    return (
      <Fragment>
        <WrappedComponent
          {...wrappedComponentProps}
          showAuth={this.showAuth}
        />
        {visible && (
          <Auth hideAuth={this.hideAuth} />
        )}
      </Fragment>
    );
  }
};

export default withAuth;
