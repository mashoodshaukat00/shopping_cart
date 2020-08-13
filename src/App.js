import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import { getProduct } from "./data/productData";
import Modal from "./components/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productOnCart: [],
      cartOpen: false,
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleCart = this.handleCart.bind(this);
  }

  componentDidMount() {
    const products = [...getProduct()];
    this.setState({ products });
  }

  handleAddToCart(product_id) {
    const getProduct = this.state.products.filter((p) => p.id === product_id);
    getProduct[0].isAddedToCart = false;
    const updateProductToCart = [...this.state.productOnCart, ...getProduct];

    // work on changing isAddedToCart to true
    const products = [...this.state.products];
    const index = this.state.products.findIndex((p) => p.id === product_id);

    products[index].isAddedToCart = true;

    this.setState({ productOnCart: updateProductToCart, products });
  }

  handleCart() {
    this.setState({
      cartOpen: !this.state.cartOpen,
    });
  }

  render() {
    return (
      <>
        <Navbar
          productCount={this.state.productOnCart.length}
          onHandleCart={this.handleCart}
        />
        <main className="px-4 ">
          <Products
            isCartOpen={this.state.cartOpen}
            products={this.state.products}
            onHandleAddToCart={this.handleAddToCart}
          />
          <Modal show={this.state.cartOpen} onHandleClose={this.handleCart}>
            <Cart cartProducts={this.state.productOnCart} />
          </Modal>
        </main>
      </>
    );
  }
}

export default App;

// <h1 className="capitalize text-center text-2xl mt-2 text-pink-700 tracking-widest underline ">
// Buy Fresh Fruits
// </h1>
