import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosPricetag } from "react-icons/io";

const FruitsCard = (props) => {
  const {
    id,
    imgSrc,
    name,
    quotes,
    price,
    isAddedToCart,
    onHandleAddToCart,
  } = props;

  return (
    <div className="card w-full h-400">
      <img className="w-200 h-200" src={imgSrc} alt={name} />
      <div className="badge ">
        <span className="mr-1">
          <IoIosPricetag />
        </span>
        <span>${price}</span>
      </div>
      <div className="p-2 overflow-hidden">
        <h3 className="fruit_name" style={{ marginLeft: -15 }}>
          {name}
        </h3>
        <p className="capitalize mb-3">{quotes}</p>
      </div>
      <button
        disabled={isAddedToCart}
        className={`btn_add_to_cart focus:outline-none focus:shadow-outline ${
          isAddedToCart
            ? "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-700 transition ease-out duration-150"
            : "text-pink-200 bg-pink-600 hover:bg-pink-300 hover:text-pink-700 transition ease-out duration-500"
        }`}
        onClick={() => onHandleAddToCart(id)}
      >
        <span className="inline-block mr-2  text-xl">
          <FiShoppingCart />
        </span>
        <span className="inline-block">
          {isAddedToCart ? "Added to cart " : "Add to cart "}
        </span>
      </button>
    </div>
  );
};

export default FruitsCard;
