import React from "react";

const CartProduct = (props) => {
  const { imgSrc, name, quotes, price } = props;
  return (
    <div className="flex ">
      <img className="w-40 h-40" src={imgSrc} alt={name} />
      <div className="">
        <span>{price}</span>
      </div>
      <div className="p-2 overflow-hidden">
        <h3 className="fruit_name" style={{ marginLeft: -15 }}>
          {name}
        </h3>
        <p className="capitalize mb-3">{quotes}</p>
      </div>
    </div>
  );
};

export default CartProduct;
