import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const {
						id,
						company,
						img,
						info,
						price,
						title,
						inCart
					} = value.details;
					return (
						<div className="bg-white container mt-4 rounded">
							<div className="row">
								<div className="col-10 mx-auto text-center text-blue my-3">
									<h1>{title}</h1>
								</div>
							</div>
							<div className="row py-2">
								<div className="col-10 mx-auto col-md-6 py-1">
									<img className="img-fluid" src={img} alt="phone" />
								</div>
								<div className="col-10 mx-auto col-md-5 my-3">
									<p>
										<strong>Model:</strong> {title}
									</p>
									<p>
										<strong>Manufacturer:</strong> {company}
									</p>
									<p>
										<strong>Description:</strong> {info}
									</p>
									<h4 className="p-2">
										<strong>Price: ${price}</strong>
									</h4>
									<div className="p-2">
										<Link to="/">
											<ButtonContainer>Back to Main</ButtonContainer>
										</Link>
										<ButtonContainer
											disabled={inCart ? true : false}
											onClick={() => {
												value.addToCart(id);
											}}>
											{inCart ? 'In Cart' : 'Add to Cart'}
										</ButtonContainer>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}
