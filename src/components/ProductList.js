import React, { Component } from 'react';
// import Product from './Product';
import Title from './Title';
import { storePhones } from '../data';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
	state = {
		products: storePhones
	};

	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title text="Welcome to our store!" />
						<div className="row">
							<ProductConsumer>
								{hello => {
									return <h1>{hello}</h1>;
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
