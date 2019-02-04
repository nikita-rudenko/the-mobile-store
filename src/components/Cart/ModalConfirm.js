import React, { Component } from 'react';
import { ModalContainer } from '../styled/Modal';
import { ButtonContainer } from '../styled/Button';
import { ProductConsumer } from '../../context';

export default class ModalConfirm extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					console.log(value);
					const { confirmOpen, closeConfirm } = value;

					if (!confirmOpen) {
						return null;
					} else {
						return (
							<ModalContainer>
								<div className="container">
									<div className="row">
										<div
											id="modal"
											className="col-10 mx-auto col-md-6 col-lg-4 text-center px-3 py-4 rounded">
											<div className="text-center p-2">
												<i className="fas fa-exclamation-circle" />
											</div>
											<h3>Are you sure?</h3>
											<ButtonContainer
												type="button"
												className="btn-trash"
												onClick={() => closeConfirm(true)}>
												Yes
											</ButtonContainer>
											<ButtonContainer
												type="button"
												onClick={() => closeConfirm(false)}>
												Cancel
											</ButtonContainer>
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
