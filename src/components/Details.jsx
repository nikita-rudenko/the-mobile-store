import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ProductConsumer } from '../context';
import ButtonContainer from './styled/Button';

class Details extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
            specs,
          } = value.details;
          return (
            <div className='bg-white container my-4 py-2 rounded'>
              <div className='row'>
                <div className='col-10 mx-auto text-center text-blue my-3'>
                  <h2>{title}</h2>
                </div>
              </div>
              <div className='row py-2'>
                <div className='col-10 mx-auto col-md-6 pt-1 mb-4'>
                  <img className='img-fluid' src={img} alt='phone' />
                </div>
                <div className='col-10 mx-auto col-md-6 py-5'>
                  <p className='col-md-10'>
                    <strong>Model: </strong>
                    <span>{title}</span>
                  </p>
                  <p className='col-md-10'>
                    <strong>Manufacturer: </strong>
                    <span>{company}</span>
                  </p>
                  <p className='col-md-10 text-justify'>
                    <strong className='font-weight-bold'>Description: </strong>
                    <span>{info}</span>
                  </p>
                  <h4 className='p-2 col-md-10 text-center font-weight-bold font-italic'>
                    <strong>
                      <span>Price: $</span>
                      <span>{price}</span>
                    </strong>
                  </h4>
                  <div className='p-2 col-md-10 text-center'>
                    <Link to='/'>
                      <ButtonContainer>To Store</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={!!inCart}
                      onClick={() => {
                        value.handleAddToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? 'In Cart' : 'Add to Cart'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>

              <h3 className='text-center py-3'>Specifications</h3>
              <table className='col-8 mx-auto table fluid'>
                <tbody>
                  <tr>
                    <th scope='row'>Body</th>
                    <td>{specs.body}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Display</th>
                    <td>{specs.display}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Platform</th>
                    <td>{specs.platform}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Chipset</th>
                    <td>{specs.chipset}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Memory</th>
                    <td>{specs.memory}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Camera</th>
                    <td>
                      <table className='table'>
                        <tbody>
                          <tr>
                            <th>Main</th>
                            <td>{specs.camera.main}</td>
                          </tr>
                          <tr>
                            <th>Selfie</th>
                            <td>{specs.camera.selfie}</td>
                          </tr>
                          <tr>
                            <th>Features</th>
                            <td>{specs.camera.features}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <th scope='row'>Battery</th>
                    <td>{specs.battery}</td>
                  </tr>
                  <tr>
                    <th scope='row'>Features</th>
                    <td>{specs.features}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
