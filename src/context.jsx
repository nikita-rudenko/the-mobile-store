import PropTypes from 'prop-types';
import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    details: null,
    cart: [],
    modalOpen: false,
    confirmOpen: false,
    onConfirm: [],
    modalProduct: null,
    itemsTotalCount: 0,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = async () => {
    await fetch(
      'https://cors-anywhere.herokuapp.com/the-mobile-store.herokuapp.com/api/phones/'
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          products: data,
        })
      );
  };

  setDetails = data => {
    this.setState({
      details: data,
    });
  };

  handleDetails = async id => {
    const link = `https://cors-anywhere.herokuapp.com/the-mobile-store.herokuapp.com/api/phones/${id}`;

    await fetch(link)
      .then(res => res.json())
      .then(data => this.setDetails(data));
  };

  // handleAddToCart = (id = 1) => {
  //   const { products } = this.state;
  //   const tempProducts = [...products];
  //   const index = tempProducts.indexOf(this.getItem(id));
  //   const product = tempProducts[index];
  //   product.inCart = true;
  //   product.count = 1;
  //   const { price } = product;
  //   product.total = price;

  //   this.setState(
  //     () => {
  //       const { cart } = this.state;
  //       return {
  //         products: tempProducts,
  //         cart: [...cart, product],
  //       };
  //     },
  //     () => {
  //       this.addTotals();
  //     }
  //   );
  // };

  openModal = id => {
    const product = this.getItem(id);
    this.setState({
      modalOpen: true,
      modalProduct: product,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpen: false,
    });
  };

  openConfirm = (func, id) => {
    const args = [func, id];
    this.setState({
      confirmOpen: true,
      onConfirm: [...args],
    });
  };

  closeConfirm = answer => {
    const {
      onConfirm: [todo, item],
    } = this.state;

    if (todo && item && answer) {
      todo(item);
    } else if (todo && answer) {
      todo();
    } else {
      this.setState({
        confirmOpen: false,
        onConfirm: [],
      });
      return;
    }
    this.setState({
      confirmOpen: false,
      onConfirm: [],
    });
  };

  // cart methods
  increment = id => {
    const { cart } = this.state;
    const tempCart = [...cart];
    const selected = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selected);
    const product = tempCart[index];

    if (product.count === 99) {
      return;
    }

    product.count += 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  decrement = id => {
    const { cart } = this.state;
    const tempCart = [...cart];
    const selected = tempCart.find(item => item.id === id);

    const index = tempCart.indexOf(selected);
    const product = tempCart[index];

    if (product.count === 1) {
      return;
    }

    product.count -= 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  removeItem = id => {
    this.openConfirm();
    const { cart, products } = this.state;
    let tempCart = [...cart];
    const tempProducts = [...products];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(this.getItem(id));
    const removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return { cart: [...tempCart], products: [...tempProducts] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.addTotals();
        this.setProducts();
      }
    );
  };

  addTotals = () => {
    const { cart } = this.state;

    const itemsCount = cart.reduce((acc, item) => {
      return acc + item.inCart;
    }, 0);

    const subTotal = cart.reduce((acc, item) => {
      return acc + item.total;
    }, 0);

    const tempTax = subTotal * 0.07;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState({
      itemsTotalCount: itemsCount,
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total,
    });
  };

  render() {
    const { children } = this.props;

    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          // handleAddToCart: this.handleAddToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          openConfirm: this.openConfirm,
          closeConfirm: this.closeConfirm,
        }}
      >
        {children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProductProvider, ProductConsumer };
