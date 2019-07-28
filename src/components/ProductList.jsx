import React from 'react';

import { ProductConsumer } from '../context';
import Product from './Product';

function ProductList() {
  return (
    <React.Fragment>
      <div className='py-1'>
        <div className='container'>
          <div className='row'>
            <ProductConsumer>
              {value => {
                return value.products.map(phone => {
                  return <Product key={phone.id} product={phone} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductList;
