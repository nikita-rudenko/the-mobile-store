import PropTypes from 'prop-types';
import React from 'react';

import CartItem from './CartItem';

export default function CartList({
  cart,
  increment,
  decrement,
  removeItem,
  openConfirm,
  handleDetails,
}) {
  return (
    <div className='container rounded'>
      {cart.map(item => {
        const { id, title, img, price, total, count } = item;

        return (
          <CartItem
            id={id}
            title={title}
            img={img}
            price={price}
            total={total}
            count={count}
            key={id}
            increment={increment}
            decrement={decrement}
            removeItem={removeItem}
            openConfirm={openConfirm}
            handleDetails={handleDetails}
          />
        );
      })}
    </div>
  );
}

CartList.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  openConfirm: PropTypes.func.isRequired,
  handleDetails: PropTypes.func.isRequired,
};
