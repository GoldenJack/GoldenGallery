import React, { Component, Fragment } from 'react';
import T from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { 
    getGalleryByTitle
} from 'features/Gallery/redux-store/entites/List'

function mapStateToProps(state) {
    console.log(state)
  return {
    gallery: state.gallery
  };
}

function mapDispatchToProps(dispatch) {
  const actions = bindActionCreators({ getGalleryByTitle }, dispatch);
  return { ...actions };
}

const withGallery = WrappedComponent => class extends Component {
  render() {
    const {
      gallery: { loading, loaded, error },
      ...wrappedComponentProps
    } = this.props;
    return (
      <Fragment>
        {loading && <span>Загрузка галлереи</span>}
        {loaded && React.createElement(WrappedComponent, wrappedComponentProps)}
        {error && <span>Ошибка при загрузке галлереи</span>}
      </Fragment>
    );
  }
};

const composedHoc = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withGallery
);

export default composedHoc;
