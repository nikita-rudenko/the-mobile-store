import React from 'react';

import { ProductConsumer } from '../../context';
import Title from '../Title';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';
import ModalConfirm from './ModalConfirm';

function Cart() {
  return (
    <section className='pb-5'>
      <ProductConsumer>
        {value => {
          const {
            cart,
            openConfirm,
            clearCart,
            increment,
            decrement,
            removeItem,
            handleDetails,
          } = value;
          if (cart.length) {
            const { cartSubTotal, cartTax, cartTotal } = cart;

            return (
              <React.Fragment>
                <Title text='Your Cart' />
                <CartColumns />
                <CartList
                  cart={cart}
                  increment={increment}
                  decrement={decrement}
                  openConfirm={openConfirm}
                  removeItem={removeItem}
                  handleDetails={handleDetails}
                />
                <CartTotals
                  cartSubTotal={cartSubTotal}
                  cartTax={cartTax}
                  cartTotal={cartTotal}
                  openConfirm={openConfirm}
                  clearCart={clearCart}
                />
                <ModalConfirm />
              </React.Fragment>
            );
          }
          return <EmptyCart />;
        }}
      </ProductConsumer>
    </section>
  );
}

export default Cart;
