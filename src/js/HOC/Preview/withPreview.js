import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preview from 'atoms/Preview';


const withPreview = WrappedComponent => class extends Component {
  state = {
    previewDisplay: false,
    previewImg: ''
  };

  previewOpen = (e) => {
    console.log(e.target.src)
    this.setState({
      previewDisplay: true,
      previewImg: e.target.src
    })
  }

  render() {
    const { ...wrappedComponentProps } = this.props;
    const { previewDisplay, previewImg } = this.state;
    
    return (
      <Fragment>
        <WrappedComponent
          {...wrappedComponentProps}
          previewOpen={this.previewOpen}
        />
        {previewDisplay && (
          <Preview img={ previewImg }/>
        )}
      </Fragment>
    );
  }
};

export default withPreview;
