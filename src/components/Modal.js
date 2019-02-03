import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './styled/Button';
import { Link } from 'react-router-dom';
import { ModalContainer } from './styled/Modal';

export default class Modal extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const { modalOpen, closeModal } = value;
					const { img, title, price } = value.modalProduct;

					if (!modalOpen) {
						return null;
					} else {
						return (
							<ModalContainer>
								<div className="container">
									<div className="row">
										<div
											id="modal"
											className="col-10 mx-auto col-md-6 col-lg-4 text-center pt-4 pb-3 px-3 rounded">
											<h3> Item Added To The Cart</h3>
											<img className="img-fluid p-3" src={img} alt="product" />
											<h4 className="">{title}</h4>
											<h5 className="font-italic font-weight-bold">
												Price: ${price}
											</h5>
											<Link to="/cart">
												<ButtonContainer cart onClick={() => closeModal()}>
													Go to Cart
												</ButtonContainer>
											</Link>
											<Link to="/">
												<ButtonContainer onClick={() => closeModal()}>
													Close
												</ButtonContainer>
											</Link>
										</div>
									</div>
								</div>
							</ModalContainer>
						);
					}
				}}
			</ProductConsumer>
		);
	}
}
