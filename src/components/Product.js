import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Product extends Component {
	render() {
		const { id, title, img, price, inCart } = this.props.product;
		return (
			<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
				<div className="card">
					<div className="img-container p-2" onClick={() => console.log('hi!')}>
						<Link to="/details">
							<img src={img} alt="product" className="card-img-top" />
						</Link>
						<button
							className="cart-btn"
							disabled={inCart ? true : false}
							onClick={() => console.log('sup')}>
							{inCart ? (
								<p className="text-capitalize mb-0" disabled>
									in сart
								</p>
							) : (
								<i className="fas fa-cart-plus" />
							)}
						</button>
					</div>
					<div className="card-footer d-flex justify-content-between">
						<p className="align-self-center mb-0">{title}</p>
						<h6 className="align-self-center text-blue font-italic mb-0">
							<span className="mb-0">${price}</span>
						</h6>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

const ProductWrapper = styled.div`
	.card {
		border-color: transparent;
	}
	.card-footer {
		height: 4rem;
	}
	img {
		width: 100% !important;
		height: 100%;
	}
`;
