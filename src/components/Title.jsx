import PropTypes from 'prop-types';
import React from 'react';

function Title({ text }) {
  return (
    <div className='row mx-auto'>
      <div className='col-10 mx-auto text-center my-3 text-title'>
        <h2 className='text-capitalize font-weight-bold'>
          <span>
            <i className='fas fa-shopping-cart' />
          </span>
          <span>{text}</span>
        </h2>
      </div>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
