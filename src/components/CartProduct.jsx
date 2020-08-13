import React from "react";

const CartProduct = (props) => {
  const { imgSrc, name, quotes, price } = props;
  return (
    <div className="flex flex-col justify-center items-center mb-3 p-3 text-center border-b">
      <img className="w-40 h-40 rounded-full mb-3" src={imgSrc} alt={name} />
      <span className="bg-pink-400 text-pink-800 p-2 rounded">{price}</span>
      <h3 className="fruit_name mt-3">{name}</h3>
      <p className="capitalize mb-3">{quotes}</p>
      <button className="bg-red-600 py-2 px-4 text-center text-red-100 mb-2 rounded">
        Remove from Cart
      </button>
    </div>
  );
};

export default CartProduct;
