import React, { Component, Fragment } from 'react';

const withForm = WrappedComponent => class extends Component {
  state = {
    login: '',
    password: ''
  };

  componentDidMount() {
   
  }

  onFieldChange = fieldName => e => {
    this.setState({
      [fieldName]: e.currentTarget.value
    });
  }

  render() {
    const { ...wrappedComponentProps } = this.props;
    const { ...stateToProps } = this.state;
    return (
      <Fragment>
        <WrappedComponent
          {...wrappedComponentProps}
          {...stateToProps}
          onFieldChange={this.onFieldChange}
        />
      </Fragment>
    );
  }
};

export default withForm;
