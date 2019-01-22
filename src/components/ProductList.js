import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title text="Welcome to our store!" />
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(phone => {
										return <Product key={phone.id} product={phone} />;
									});
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
