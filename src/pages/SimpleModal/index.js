import React, { useState } from "react";
import Modal from "./components/Modal";
import SimpleModalStyled from "./style";

function SimpleModal() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SimpleModalStyled>
        <h1>Click on to open the modal.</h1>
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Open
        </button>
      </SimpleModalStyled>
      {modalOpen && (
        <Modal setOpenModal={setModalOpen} title={"Title here."}>
          <p>Content of modal here.</p>
        </Modal>
      )}
    </>
  );
}

export default SimpleModal;
