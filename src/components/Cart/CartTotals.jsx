import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

function CartTotals({
  cartSubTotal,
  cartTax,
  cartTotal,
  openConfirm,
  clearCart,
}) {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-12 fluid mt-2 ml-md-auto mr-sm-2 col-sm-12 text-right'>
            <div className='d-flex justify-content-between'>
              <Link to='/'>
                <button className='btn btn-c btn-back my-3' type='button'>
                  To Store
                </button>
              </Link>
              <button
                className='btn btn-c btn-danger my-3'
                type='button'
                onClick={() => openConfirm(clearCart)}
              >
                <i className='fas fa-times-circle' />
                <span>Clear Cart</span>
              </button>
            </div>
            <h4>
              <strong>Subtotal:</strong>
              <span>$</span>
              <span>{cartSubTotal}</span>
            </h4>
            <h4>
              <strong>Tax:</strong>
              <span>$</span>
              <span>{cartTax}</span>
            </h4>
            <h4>
              <strong className='text-title'>Total:</strong>
              <span>$</span>
              <span>{cartTotal}</span>
            </h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

CartTotals.propTypes = {
  cartSubTotal: PropTypes.number,
  cartTax: PropTypes.number,
  cartTotal: PropTypes.number,
  openConfirm: PropTypes.func,
  clearCart: PropTypes.func,
};

CartTotals.defaultProps = {
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  openConfirm: () => {},
  clearCart: () => {},
};

export default CartTotals;
