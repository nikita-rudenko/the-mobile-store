import React, { Component } from 'react';
import { storePhones, detailsPhone } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		products: [],
		details: detailsPhone,
		cart: []
	};

	componentDidMount() {
		this.setProducts();
	}

	// copy products
	setProducts = () => {
		let tempProducts = [];
		storePhones.forEach(item => {
			const singleItem = { ...item };
			tempProducts = [...tempProducts, singleItem];
		});
		this.setState(() => {
			return { products: tempProducts };
		});
	};

	getItem = id => {
		return this.state.products.find(item => item.id === id);
	};

	handleDetails = id => {
		const product = this.getItem(id);
		this.setState({
			details: product
		});
	};

	handleAddToCart = id => {
		let tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		const price = product.price;
		product.total = price;

		this.setState({
			products: tempProducts,
			cart: [...this.state.cart, product]
		});
		console.log(this.state);
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
