import React, { Component } from 'react';
import { storePhones, detailsPhone } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		products: [],
		details: detailsPhone,
		cart: [],
		modalOpen: false,
		modalProduct: detailsPhone,
		cartSubTotal: 0,
		cartTax: 0,
		cartTotal: 0
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
	};

	openModal = id => {
		const product = this.getItem(id);
		this.setState({
			modalOpen: true,
			modalProduct: product
		});
	};

	closeModal = () => {
		this.setState({
			modalOpen: false
		});
	};

	// cart methods
	increment = id => {
		console.log('increment');
	};

	decrement = id => {
		console.log('decrement');
	};

	removeItem = id => {
		console.log('item removed');
	};

	clearCart = () => {
		console.log('item removed');
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetails: this.handleDetails,
					handleAddToCart: this.handleAddToCart,
					openModal: this.openModal,
					closeModal: this.closeModal,
					increment: this.increment,
					decrement: this.decrement,
					removeItem: this.removeItem,
					clearCart: this.clearCart
				}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
