import React from "react";

import { FiShoppingCart } from "react-icons/fi";

const Navbar = (props) => {
  return (
    <nav className="bg-white border-b p-3">
      <div className="container flex justify-between items-center m-auto">
        <a
          href="/"
          rel="noopener noreferrer"
          className="text-xl uppercase tracking-widest shadow-outline p-2 rounded"
        >
          <span className="bg-pink-600 text-pink-100 p-1 rounded mr-1">
            Fruits
          </span>
          👉
          <span className=" text-purple-900 p-1 rounded">House</span>
        </a>
        <ul>
          <li>
            <button
              disabled={props.productCount <= 0}
              className="text-2xl cart_btn"
              onClick={props.onHandleCart}
            >
              <FiShoppingCart className="text-blue-700" />
            </button>
            <span className="text-pink-600 text-xl mt-2 mx-1 font-extrabold">
              {props.productCount}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
