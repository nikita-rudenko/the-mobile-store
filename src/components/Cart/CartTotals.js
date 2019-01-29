import React from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';

export default function CartTotals({ value, history }) {
	const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
						<Link to="/">
							<button
								className="btn btn-c btn-danger my-3 mr-2"
								type="button"
								onClick={() => clearCart()}>
								<i className="fas fa-times-circle" /> Clear Cart
							</button>
						</Link>
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
