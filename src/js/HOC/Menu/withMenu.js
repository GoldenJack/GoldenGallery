import React, { Component, Fragment } from 'react';
import { routes } from 'constants/menu';

const withMenu = WrappedComponent => class extends Component {
  state = {
    title: '',
    menu: [],
    isSubMenu: false,
    subMenuTitle: '',
    subMenu: []
  };

  componentDidMount() {
    const { loading } = this.props;
    !loading && this._getMenu();
  }

  _getMenu() {
    const { page } = this.props;
    const menu = [];
    const subMenuArr = [];
    routes.map(({ name, to, subMenuTitle, subMenu }) => {
      menu.push({
        title: name,
        pathName: to,
        key: name
      })
      if (page.indexOf(to !== -1) && subMenu.length) {
        console.log(page.indexOf(to !== -1))
        subMenu.map(({ name, to }) => (
          subMenuArr.push({
            title: name,
            pathName: to,
            key: name
          })
        ))
        this.setState({
          isSubMenu: true,
          subMenuTitle,
          subMenu: subMenuArr
        })
      }

      this.setState({
        title: 'Меню',
        menu
      })
    })
  }

  render() {
    const { page, ...wrappedComponentProps } = this.props;
    const { ...stateToProps } = this.state;
    return (
      <Fragment>
        <WrappedComponent
          {...wrappedComponentProps}
          {...stateToProps}
        />
      </Fragment>
    );
  }
};

export default withMenu;
