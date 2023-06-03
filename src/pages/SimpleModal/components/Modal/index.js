import React from "react";
import ModalStyled from "./style";

function Modal({ setOpenModal, title = "", children }) {
  return (
    <ModalStyled>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              &times;
            </button>
          </div>
          <div className="title">
            <h2>{title}</h2>
          </div>
          <div className="body">{children}</div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </ModalStyled>
  );
}

export default Modal;
