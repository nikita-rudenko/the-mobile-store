import React, { Component } from 'react';
import { storePhones, detailPhone } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		products: storePhones,
		detail: detailPhone
	};

	handleDetails = () => {
		console.log('hello from details');
	};

	handleAddToCart = () => {
		console.log('hello from add to cart');
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetails: this.handleDetails,
					handleAddToCart: this.handleAddToCart
				}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
