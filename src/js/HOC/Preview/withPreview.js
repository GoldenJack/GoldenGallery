import React, { Component, Fragment } from 'react';
import Preview from 'atoms/Preview';


const withPreview = WrappedComponent => class extends Component {
  state = {
    previewDisplay: false,
    previewImg: ''
  };

  previewOpen = (e) => {
    this.setState({
      previewDisplay: true,
      previewImg: e.target.src
    })
  }

  previewClose = () => {
    this.setState({
      previewDisplay: false
    })
  }

  render() {
    const { ...wrappedComponentProps } = this.props;
    const { previewImg, previewDisplay } = this.state;
    
    return (
      <Fragment>
        <WrappedComponent
          {...wrappedComponentProps}
          previewOpen={this.previewOpen}
        />
        {previewDisplay && (
          <Preview img={ previewImg } display={ previewDisplay } close={ this.previewClose }/>
        )}
      </Fragment>
    );
  }
};

export default withPreview;
