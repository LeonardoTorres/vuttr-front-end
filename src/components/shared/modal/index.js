import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "./styles";
import ModalContent from "./content";

const ModalWindow = props => {
  const { show, ...otherProps} = props;
  return ReactDOM.createPortal(
    <Modal show={show}>
        <ModalContent {...otherProps}/>
    </Modal>,
    document.body
  );
};

export default ModalWindow;
