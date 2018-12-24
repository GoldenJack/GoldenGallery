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

  getDataForm = () => {
    const { ...props } = this.state;

    return {
      props
    };
  }

  onFormSubmit = (actionCallback) => e => {
    e.preventDefault();
    actionCallback(this.getDataForm());
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
          onFormSubmit={this.onFormSubmit}
        />
      </Fragment>
    );
  }
};

export default withForm;
