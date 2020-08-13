import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Products from "./containers/Products";
import Cart from "./containers/Cart";
import { getProduct } from "./data/productData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productOnCart: [],
    };
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    const products = [...getProduct()];
    this.setState({ products });
  }

  handleAddToCart(product_id) {
    const getProduct = this.state.products.filter((p) => p.id === product_id);
    getProduct[0].isAddedToCart = true;
    const updateProductToCart = [...this.state.productOnCart, ...getProduct];

    // work on changing isAddedToCart to true
    const products = [...this.state.products];
    const index = this.state.products.findIndex((p) => p.id === product_id);

    products[index].isAddedToCart = true;

    this.setState({ productOnCart: updateProductToCart, products });
  }

  render() {
    return (
      <>
        <Navbar productCount={this.state.productOnCart.length} />
        <main className="px-4">
          <h1 className="capitalize text-center text-2xl mt-2 text-pink-700 tracking-widest underline ">
            Buy Fresh Fruits
          </h1>
          <Products
            products={this.state.products}
            onHandleAddToCart={this.handleAddToCart}
          />
          <Cart cartProducts={this.state.productOnCart} />
        </main>
      </>
    );
  }
}

export default App;
