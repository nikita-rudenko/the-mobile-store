import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

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
											className="col-10 mx-auto col-md-6 col-lg-4 text-center py-5">
											<h5>Item Added To The Cart</h5>
											<img className="img-fluid py-3" src={img} alt="product" />
											<h5 className="">{title}</h5>
											<h5 className="font-italic font-weight-bold">
												Price: ${price}
											</h5>
											<Link to="/">
												<ButtonContainer onClick={() => closeModal()}>
													Back to Main
												</ButtonContainer>
											</Link>
											<Link to="/cart">
												<ButtonContainer cart onClick={() => closeModal()}>
													Go to Cart
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

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;

	#modal {
		background: var(--mainWhite);
	}
`;
