import React from 'react';

export default function CartItem({ item, value }) {
	const { id, title, img, price, total, count } = item;
	const { increment, decrement, removeItem } = value;

	return (
		<div className="row py-3 text-center border">
			<div className="col-10 mx-auto col-lg-2 my-1 my-lg-auto">
				<img
					className="img-fluid"
					src={img}
					style={{ height: '6rem' }}
					alt="item"
				/>
			</div>
			<div className="col-10 mx-auto col-lg-2 my-1 my-lg-auto">
				<span className="d-lg-none">Item:</span>
				{title}
			</div>
			<div className="col-10 mx-auto col-lg-2 my-1 my-lg-auto">
				<span className="d-lg-none">Price:</span> $ {price}
			</div>
			<div className="col-10 mx-auto col-lg-2 my-1 my-lg-auto">
				<div className="d-flex justify-content-center">
					<div>
						<span className="btn btn-black mx-1" onClick={() => decrement(id)}>
							&#8722;
						</span>
						<span className="mx-2">{count}</span>
						<span className="btn btn-black mx-1" onClick={() => increment(id)}>
							&#43;
						</span>
					</div>
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2 my-1 my-lg-auto">
				<div className="trash-icon">
					<i className="fas fa-trash" onClick={() => removeItem(id)} />
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2 my-1 my-lg-auto">
				<strong>Item total:</strong> $ {total}
			</div>
		</div>
	);
}
