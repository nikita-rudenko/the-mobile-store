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
						inCart,
						specs
					} = value.details;
					return (
						<div className="bg-white container mt-4 py-2 rounded">
							<div className="row">
								<div className="col-10 mx-auto text-center text-blue my-3">
									<h2>{title}</h2>
								</div>
							</div>
							<div className="row py-2">
								<div className="col-10 mx-auto col-md-6 pt-1 mb-4">
									<img className="img-fluid" src={img} alt="phone" />
								</div>
								<div className="col-10 mx-auto col-md-5 py-5">
									<p>
										<strong>Model:</strong> {title}
									</p>
									<p>
										<strong>Manufacturer:</strong> {company}
									</p>
									<p>
										<strong className="font-weight-bold">Description:</strong>{' '}
										{info}
									</p>
									<h4 className="p-2 text-center font-weight-bold font-italic">
										<strong>Price: ${price}</strong>
									</h4>
									<div className="p-2 text-center">
										<Link to="/">
											<ButtonContainer>Back to Main</ButtonContainer>
										</Link>
										<ButtonContainer
											cart
											disabled={inCart ? true : false}
											onClick={() => {
												value.handleAddToCart(id);
											}}>
											{inCart ? 'In Cart' : 'Add to Cart'}
										</ButtonContainer>
									</div>
								</div>
							</div>

							<h3 className="text-center py-3">Specifications</h3>
							<table class="col-8 mx-auto table fluid">
								<tbody>
									<tr>
										<th scope="row">Body</th>
										<td>{specs.body}</td>
									</tr>
									<tr>
										<th scope="row">Display</th>
										<td>{specs.body}</td>
									</tr>
									<tr>
										<th scope="row">Platform</th>
										<td>{specs.platform}</td>
									</tr>
									<tr>
										<th scope="row">Chipset</th>
										<td>{specs.chipset}</td>
									</tr>
									<tr>
										<th scope="row">Memory</th>
										<td>{specs.memory}</td>
									</tr>
									<tr>
										<th scope="row">Camera</th>
										<tr>
											<th>Main</th>
											<td>{specs.camera.main}</td>
										</tr>
										<tr>
											<th>Selfie</th>
											<td>{specs.camera.selfie}</td>
										</tr>
										<tr>
											<th>Features</th>
											<td>{specs.camera.features}</td>
										</tr>
									</tr>
									<tr>
										<th scope="row">Battery</th>
										<td>{specs.battery}</td>
									</tr>
									<tr>
										<th scope="row">Features</th>
										<td>{specs.features}</td>
									</tr>
								</tbody>
							</table>
						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}
