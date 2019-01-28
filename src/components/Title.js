import React from 'react';

export default function Title({ text }) {
	return (
		<div className="row mx-auto">
			<div className="col-10 mx-auto text-center my-3 text-title">
				<h2 className="text-capitalize font-weight-bold">
					<span>
						<i className="fas fa-shopping-cart" />
					</span>{' '}
					{text}
				</h2>
			</div>
		</div>
	);
}
