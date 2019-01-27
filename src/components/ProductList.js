import React, { Component } from 'react';
import Product from './Product';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="py-1">
					<div className="container">
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
