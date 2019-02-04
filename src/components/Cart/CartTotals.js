import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function CartTotals({ value, history }) {
	const { cartSubTotal, cartTax, cartTotal, openConfirm, clearCart } = value;

	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-12 fluid mt-2 ml-md-auto mr-sm-2 col-sm-12 text-right">
						<div className="d-flex justify-content-between">
							<Link to="/">
								<button className="btn btn-c btn-back my-3" type="button">
									To Store
								</button>
							</Link>
							<button
								className="btn btn-c btn-danger my-3"
								type="button"
								onClick={() => openConfirm(clearCart)}>
								<i className="fas fa-times-circle" /> Clear Cart
							</button>
						</div>
						<h4>
							<strong>Subtotal:</strong> ${cartSubTotal}
						</h4>
						<h4>
							<strong>Tax:</strong> ${cartTax}
						</h4>
						<h4>
							<strong className="text-title">Total:</strong> ${cartTotal}
						</h4>
						<PayPalButton
							className="ml-5"
							total={cartTotal}
							clearCart={clearCart}
							history={history}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
