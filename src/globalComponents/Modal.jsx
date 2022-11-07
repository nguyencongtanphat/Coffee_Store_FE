import React from "react";
import ReactDOM from "react-dom";

function Modal({ children,className }) {
  return ReactDOM.createPortal(
    <div id="modal-wrapper" className={className}>
      {children}
    </div>,
    document.querySelector("body")
  );
}

export default Modal;
