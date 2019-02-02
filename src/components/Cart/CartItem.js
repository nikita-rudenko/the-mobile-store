import React from 'react';
import { Link } from 'react-router-dom';

export default function CartItem({ item, value }) {
	const { id, title, img, price, total, count } = item;
	const { increment, decrement, removeItem } = value;

	return (
		<div className="cart-item row py-3 text-center bg-white rounded border">
			<div className="col-10 mx-auto col-lg-2 my-1 my-lg-auto">
				<img
					className="img-fluid"
					src={img}
					style={{ height: '6rem' }}
					alt="item"
				/>
			</div>
			<div className="col-10 mx-auto col-lg-2 my-1 my-lg-auto">
				<span className="d-lg-none">
					<strong>Item:</strong>{' '}
				</span>
				<Link to="/details">{title}</Link>
			</div>
			<div className="col-10 mx-auto col-lg-2 my-1 my-lg-auto">
				<span className="d-lg-none">
					{' '}
					<strong>Price:</strong>{' '}
				</span>{' '}
				${price}
			</div>
			<div className="col-10 mx-auto col-lg-2 my-1 my-lg-auto">
				<div className="d-flex justify-content-center">
					<div>
						<span
							className="btn btn-c btn-black mx-1"
							onClick={() => decrement(id)}>
							<i className="fas fa-minus" />
						</span>
						<span className="mx-2">{count}</span>
						<span
							className="btn btn-c btn-black mx-1"
							onClick={() => increment(id)}>
							<i className="fas fa-plus" />
						</span>
					</div>
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2 my-1 my-lg-auto">
				<div
					className="btn btn-c btn-trash"
					onClick={() => removeItem(id)}
					title="Remove Item">
					<i className="fas fa-trash" />
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2 my-1 my-lg-auto">
				<strong>Item total:</strong> ${total}
			</div>
		</div>
	);
}
