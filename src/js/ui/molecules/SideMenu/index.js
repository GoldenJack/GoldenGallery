import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Menu from 'atoms/Menu';
import bemHelper from 'utils/bem-helper';

const cn = bemHelper('side-menu');

class SideMenu extends Component {


    render() {
        const { title, menu, isSubMenu, subMenuTitle, subMenu, loaded } = this.props;
        return (
            <Fragment >
                <Menu title={ title } menu={ menu } />
                { isSubMenu && loaded && (
                    <Menu title={ subMenuTitle } menu={ subMenu } />
                ) }
            </Fragment>
        )
    }
}

SideMenu.propTypes = {
    title: PropTypes.string.isRequired,
    menu: PropTypes.array.isRequired,
    isSubMenu: PropTypes.bool.isRequired,
    subMenuTitle: PropTypes.string.isRequired,
    subMenu: PropTypes.array
}

SideMenu.defaultProps = {
    title: 'Меню',
    isSubMenu: false,
    subMenuTitle: 'Категории'
}

export default SideMenu;