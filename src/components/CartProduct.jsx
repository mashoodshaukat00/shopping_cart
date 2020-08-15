import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const CartProduct = (props) => {
  const { id, imgSrc, name, quotes, price, onRemove } = props;
  return (
    <div className="flex flex-col justify-center items-center mb-3 p-3 text-center border-b">
      <img className="w-40 h-40 rounded-full mb-2" src={imgSrc} alt={name} />
      <span className="text-pink-700  rounded text-xl">${price}</span>
      <h3 className="text-2xl uppercase text-indigo-700 my-2">{name}</h3>
      <p className="capitalize mb-3">{quotes}</p>
      <button
        onClick={() => onRemove(id)}
        className="btn_delete focus:outline-none focus:shadow-outline hover:bg-red-500 hover:bg-red-200 transition ease-out duration-500"
      >
        <span className="text-xl mr-1">
          <AiOutlineDelete />
        </span>
        <span className="tracking-wider">Remove</span>
      </button>
    </div>
  );
};

export default CartProduct;
