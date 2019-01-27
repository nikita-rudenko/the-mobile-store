import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
	render() {
		const { id, title, img, price, inCart } = this.props.product;
		return (
			<ProductWrapper
				key={id}
				className="col-10 mx-auto col-md-6 col-lg-3 my-3">
				<div className="card">
					<ProductConsumer>
						{value => (
							<div
								className="img-container p-3"
								onClick={() => value.handleDetails(id)}>
								<Link to="/details">
									<img src={img} alt="product" className="card-img-top" />
								</Link>
								<button
									onClick={() => {
										value.handleAddToCart(id);
										value.openModal(id);
									}}
									className="cart-btn"
									disabled={inCart ? true : false}>
									{inCart ? (
										<p className="text-capitalize mb-0" disabled>
											in сart
										</p>
									) : (
										<i className="fas fa-cart-plus" />
									)}
								</button>
							</div>
						)}
					</ProductConsumer>
					<div className="card-footer d-flex justify-content-between">
						<p className="align-self-center mb-0">{title}</p>
						<h5 className="align-self-center text-blue font-weight-bold font-italic mb-0">
							<span className="mb-0">${price}</span>
						</h5>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool,
		specs: PropTypes.object
	}).isRequired
};

const ProductWrapper = styled.div`
	.card {
		border-color: transparent;
		transition: all 0.2s linear;
	}
	.card-footer {
		height: 4rem;
		border-top: 0;
	}
	&:hover {
		.card {
			box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
			transform: scale(1.04);
		}
		.card-footer {
			background: rgba(247, 247, 247);
		}
	}
	.img-container {
		position: relative;
		overflow: hidden;
	}
	.card-img-top {
		transition: all 0.1s linear;
	}
	.img-container:hover .card-img-top {
		transform: scale(1.04);
	}
	.cart-btn {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 0.4rem 0.6rem;
		background: var(--mainDark);
		border: none;
		color: var(--mainWhite);
		border-radius: 1rem 0 0 0;
		transform: translate(100%, 100%);
		transition: all 0.15s linear;
	}
	.img-container:hover .cart-btn {
		transform: translate(0, 0);
	}
	.cart-btn:hover {
		background: var(--mainAccent);
		color: var(--mainWhite);
		cursor: pointer;
	}
`;
