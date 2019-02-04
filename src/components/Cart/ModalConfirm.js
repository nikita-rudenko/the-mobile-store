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
								<ButtonContainer onClick={() => closeConfirm(true)}>
									Delete
								</ButtonContainer>
								<ButtonContainer onClick={() => closeConfirm(false)}>
									Cancel
								</ButtonContainer>
							</ModalContainer>
						);
					}
				}}
			</ProductConsumer>
		);
	}
}
