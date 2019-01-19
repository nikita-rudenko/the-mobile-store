import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
	render() {
		return (
			<NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
				<Link className="navbar-brand" to="/">
					<img className="" src={logo} alt="logo" />
				</Link>
				{/* <ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">
							Products
						</Link>
					</li>
				</ul> */}
				<Link to="/store" className="ml-auto">
					<ButtonContainer>
						<span>
							<i className="fas fa-cart-plus" />
							<span> my cart</span>
						</span>
					</ButtonContainer>
				</Link>
			</NavWrapper>
		);
	}
}

const NavWrapper = styled.nav`
	background: var(--mainDark);
	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.1rem;
		text-transform: uppercase;
	}
`;
