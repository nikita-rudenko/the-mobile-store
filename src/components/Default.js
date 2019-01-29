import React, { Component } from 'react';

export default class Default extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto text-title text-center pt-3">
						<h1 className="display-3">404</h1>
						<h1>Error</h1>
						<h2>Page Not Found</h2>
						<h5>
							The requested URL{' '}
							<span className="text-danger">
								{this.props.location.pathname}
							</span>{' '}
							was not found
						</h5>
					</div>
				</div>
			</div>
		);
	}
}
