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
		itemsTotalCount: 0,
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

		this.setState(
			() => {
				return {
					products: tempProducts,
					cart: [...this.state.cart, product]
				};
			},
			() => {
				this.addTotals();
			}
		);
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
		let tempCart = [...this.state.cart];
		const selected = tempCart.find(item => item.id === id);

		const index = tempCart.indexOf(selected);
		const product = tempCart[index];

		product.count = product.count + 1;
		product.total = product.count * product.price;

		this.setState(
			() => {
				return { cart: [...tempCart] };
			},
			() => {
				this.addTotals();
			}
		);
	};

	decrement = id => {
		let tempCart = [...this.state.cart];
		const selected = tempCart.find(item => item.id === id);

		const index = tempCart.indexOf(selected);
		const product = tempCart[index];

		product.count = product.count - 1;
		product.total = product.count * product.price;

		if (product.count === 0) {
			this.removeItem(id);
		} else {
			this.setState(
				() => {
					return { cart: [...tempCart] };
				},
				() => {
					this.addTotals();
				}
			);
		}
	};

	removeItem = id => {
		let tempCart = [...this.state.cart];
		let tempProducts = [...this.state.products];

		tempCart = tempCart.filter(item => item.id !== id);

		const index = tempProducts.indexOf(this.getItem(id));
		let removedProduct = tempProducts[index];
		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0;

		this.setState(
			() => {
				return { cart: [...tempCart], products: [...tempProducts] };
			},
			() => {
				this.addTotals();
			}
		);
	};

	clearCart = () => {
		this.setState(
			() => {
				return { cart: [] };
			},
			() => {
				this.setProducts();
			}
		);
	};

	addTotals = () => {
		let itemsCount = 0;
		this.state.cart.map(item => (itemsCount += item.count));

		let subTotal = 0;
		this.state.cart.map(item => (subTotal += item.total));

		const tempTax = subTotal * 0.07;
		const tax = parseFloat(tempTax.toFixed(2));
		const total = subTotal + tax;

		this.setState({
			itemsTotalCount: itemsCount,
			cartSubTotal: subTotal,
			cartTax: tax,
			cartTotal: total
		});
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
