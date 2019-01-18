import React, { Component } from 'react';
import './App.css';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<ProductList />
				<Details />
				<Cart />
				<Default />
			</React.Fragment>
		);
	}
}

export default App;
