import React from 'react';
import { Link } from 'react-router-dom';

import ButtonContainer from '../styled/Button';

function EmptyCart() {
  return (
    <div className='container mt-5 pt-3'>
      <div className='row'>
        <div className='col-10 mx-auto text-center'>
          <h1>Your cart is empty</h1>
          <Link to='/'>
            <ButtonContainer>Back To Store</ButtonContainer>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
