import React from "react";
import { ContentBox } from "./styles";
import ModalHeader from '../header'
import ModalBody from '../body';

const ModalContent = props => {
  const { onClose, title, children } = props
  return (
    <ContentBox>
      <ModalHeader title={title} onClose={onClose} />
      <ModalBody>{children}</ModalBody>
    </ContentBox>
  );
};

export default ModalContent;
