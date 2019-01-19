import React, { Component } from 'react';
// import Product from './Product';
import Title from './Title';
import { storePhones } from '../data';

export default class ProductList extends Component {
	state = {
		products: storePhones
	};

	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="our" title="products" />
						<div className="row" />
					</div>
				</div>
			</React.Fragment>
		);
	}
}
