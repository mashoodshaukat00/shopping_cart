import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Backdrop from "./Backdrop";

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} onHandleClose={props.onHandleClose} />
      {props.show ? (
        <div className=" grid row-auto modal modal_position">
          <div>
            <div className="flex justify-end">
              <button
                className="btn_modal_close focus:outline-none focus:shadow-outline "
                onClick={props.onHandleClose}
              >
                <AiOutlineClose />
              </button>
            </div>
            {props.children}
            {props.productCount === 0 ? (
              <h2 className="text-center text-2xl text-gray-700 tracking-wider">
                There is no Product in your Cart
              </h2>
            ) : null}
          </div>
          <div className="flex md:flex-row  md:justify-between md:items-center flex-col items-start bg-gray-200  p-5 mt-auto ">
            <div className="flex justify-center items-center">
              <span className="tracking-wide text-gray-600 text-xl  mr-2">
                Total Price:{" "}
              </span>
              <p className="text-xl bg-pink-200  tracking-wider py-1 px-3 text-pink-700 rounded">
                ${props.price}
              </p>
            </div>
            <button
              disabled={props.price === 0}
              className="btn_checkout focus:outline-none focus:shadow-outline  m-auto mt-6 md:m-0 md:mt-0"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
