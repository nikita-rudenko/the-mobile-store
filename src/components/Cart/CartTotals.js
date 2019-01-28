import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
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
								<i class="fas fa-times-circle" /> Clear Cart
							</button>
						</Link>
						<h3>
							<strong>Subtotal:</strong> ${cartSubTotal}
						</h3>
						<h3>
							<strong>Tax:</strong> ${cartTax}
						</h3>
						<h3>
							<strong className="text-title">Total:</strong> ${cartTotal}
						</h3>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
