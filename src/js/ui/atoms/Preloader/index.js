import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import bemHelper from 'utils/bem-helper';
import './style.scss';

const cn = bemHelper('preloader');

class Preloader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			animation: ''
		}
	}

	componentWillUnmount(){
		return this.setState({
			animation: 'fadeOut'
		})
	}

	render() {
		const { loading } = this.props;
		const { animation } = this.state;

		return (
			<Fragment>
				{ loading && (
				<div { ...cn('', '', `animated ${animation}`) } >
					<div { ...cn('loader') }>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				)}
			</Fragment>
		)
	}
}

Preloader.propTypes = {
	loading: PropTypes.bool.isRequired
}

Preloader.defaultProps = {
	loading: false
}

export default Preloader;

