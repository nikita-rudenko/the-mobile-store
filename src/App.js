import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
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
				<Switch>
					<Route exact path="/" component={ProductList} />
					<Route path="/details" component={Details} />
					<Route path="/store" component={Cart} />
					<Route component={Default} />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
