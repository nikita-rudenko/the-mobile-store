import React from 'react';

import { ProductConsumer } from '../../context';
import ButtonContainer from '../styled/Button';
import ModalContainer from '../styled/Modal';

function ModalConfirm() {
  return (
    <ProductConsumer>
      {value => {
        const { confirmOpen, closeConfirm } = value;

        if (!confirmOpen) {
          return null;
        }
        return (
          <ModalContainer>
            <div className='container'>
              <div className='row'>
                <div
                  id='modal'
                  className='col-10 mx-auto col-md-6 col-lg-4 text-center px-3 py-4 rounded'
                >
                  <div className='text-center p-2'>
                    <i className='fas fa-exclamation-circle' />
                  </div>
                  <h3>Are you sure?</h3>
                  <ButtonContainer
                    type='button'
                    className='btn-trash'
                    onClick={() => closeConfirm(true)}
                  >
                    Yes
                  </ButtonContainer>
                  <ButtonContainer
                    type='button'
                    onClick={() => closeConfirm(false)}
                  >
                    Cancel
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </ModalContainer>
        );
      }}
    </ProductConsumer>
  );
}

export default ModalConfirm;
