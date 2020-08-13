import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosPricetag } from "react-icons/io";

const FruitsCard = (props) => {
  const { id, imgSrc, name, quotes, price, onHandleAddToCart } = props;

  return (
    <div className="card">
      <img className="w-200 h-200" src={imgSrc} alt={name} />
      <div className="badge ">
        <span className="mr-1">
          <IoIosPricetag />
        </span>
        <span>{price}</span>
      </div>
      <div className="p-2 overflow-hidden">
        <h3 className="fruit_name" style={{ marginLeft: -15 }}>
          {name}
        </h3>
        <p className="capitalize mb-3">{quotes}</p>
      </div>
      <button className="add_cart_btn" onClick={() => onHandleAddToCart(id)}>
        <span className="mr-2">
          <FiShoppingCart />
        </span>
        <span>Add to cart </span>
      </button>
    </div>
  );
};

export default FruitsCard;
