import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Backdrop from "./Backdrop";

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} onHandleClose={props.onHandleClose} />
      {props.show ? (
        <div className="modal modal_position">
          <div className="flex justify-end">
            <button className="modal_close_btn" onClick={props.onHandleClose}>
              <AiOutlineClose />
            </button>
          </div>
          {props.children}
        </div>
      ) : null}
    </>
  );
};

export default Modal;
