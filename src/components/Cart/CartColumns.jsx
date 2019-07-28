import React from 'react';

function CartColumns() {
  return (
    <div className='cart-columns container text-center d-none d-lg-block text-white pt-3 rounded'>
      <div className='row'>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='text-uppercase'>Item</p>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='text-uppercase'>Name</p>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='text-uppercase'>Price</p>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='text-uppercase'>Quantity</p>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='text-uppercase'>Remove</p>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <p className='text-uppercase'>Total</p>
        </div>
      </div>
    </div>
  );
}

export default CartColumns;
