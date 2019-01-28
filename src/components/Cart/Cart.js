import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import { ProductConsumer } from '../../context';

export default class Cart extends Component {
	render() {
		return (
			<section className="bg-white">
				<ProductConsumer>
					{value => {
						const { cart } = value;
						if (cart.length) {
							return (
								<React.Fragment>
									<Title text="Your Cart" />
									<CartColumns />
									<CartList value={value} />
								</React.Fragment>
							);
						} else {
							return <EmptyCart />;
						}
					}}
				</ProductConsumer>
			</section>
		);
	}
}
