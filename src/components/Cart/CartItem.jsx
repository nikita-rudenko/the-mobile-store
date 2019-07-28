import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function CartItem({
  id,
  title,
  img,
  price,
  total,
  count,
  increment,
  decrement,
  removeItem,
  openConfirm,
  handleDetails,
}) {
  return (
    <div className='cart-item row py-3 text-center bg-white rounded border'>
      <div className='col-10 mx-auto col-lg-2 my-1 my-lg-auto'>
        <img
          className='img-fluid'
          src={img}
          style={{ height: '6rem' }}
          alt='item'
        />
      </div>
      <div className='col-10 mx-auto col-lg-2 my-1 my-lg-auto'>
        <span className='d-lg-none'>
          <strong>Item:</strong>
        </span>
        <Link to='/details' onClick={() => handleDetails(id)}>
          {title}
        </Link>
      </div>
      <div className='col-10 mx-auto col-lg-2 my-1 my-lg-auto'>
        <span className='d-lg-none'>
          <strong>Price:</strong>
        </span>
        <span>{`$${price}`}</span>
      </div>
      <div className='col-10 mx-auto col-lg-2 my-1 my-lg-auto'>
        <div className='d-flex justify-content-center'>
          <div>
            <span
              role='button'
              tabIndex='0'
              onKeyPress={() => decrement(id)}
              className='btn btn-c btn-black mx-1'
              onClick={() => decrement(id)}
            >
              <i className='fas fa-minus' />
            </span>
            <span className='mx-2'>{count}</span>
            <span
              role='button'
              tabIndex='0'
              onKeyPress={() => increment(id)}
              className='btn btn-c btn-black mx-1'
              onClick={() => increment(id)}
            >
              <i className='fas fa-plus' />
            </span>
          </div>
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2 my-1 my-lg-auto'>
        <div
          role='button'
          tabIndex='0'
          onKeyPress={() => openConfirm(removeItem, id)}
          className='btn btn-c btn-trash'
          onClick={() => openConfirm(removeItem, id)}
          title='Remove Item'
        >
          <i className='fas fa-trash' />
        </div>
      </div>
      <div className='col-10 mx-auto col-lg-2 my-1 my-lg-auto'>
        <strong>Item total:</strong>
        <span>{`$${total}`}</span>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  openConfirm: PropTypes.func.isRequired,
  handleDetails: PropTypes.func.isRequired,
};

export default CartItem;
