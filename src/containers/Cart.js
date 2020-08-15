import React from "react";
import CartProduct from "../components/CartProduct";

const Cart = (props) => {
  let product = props.cartProducts.map((product) => {
    return (
      <CartProduct
        key={product.id}
        id={product.id}
        imgSrc={product.imgSrc}
        name={product.name}
        quotes={product.description}
        price={product.price}
        onRemove={props.onRemoveProduct}
      />
    );
  });

  return (
    <div className="py-6 text-gray-900 grid md:grid-cols-2 ">{product}</div>
  );
};

export default Cart;
