import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import ReactDOM from "react-dom";
import ContentConfirm from "./content";
import { MessageWrapper } from "./content/styles";

// import { Container } from './styles';

const ConfirmWindow = props => {
  const [visible, setVisible] = useState(false);
  const { message, onConfirm } = props;

  function onClickChildren(e) {
    e.preventDefault();
    setVisible(true);
  }

  if (!visible) {
    return React.Children.map(props.children, child => {
      return React.cloneElement(child, {
        onClick: onClickChildren
      });
    });
  } else {
    return (
      <Container visible={visible}>
        <ContentConfirm>
          <MessageWrapper>{message}</MessageWrapper>
          <button
            onClick={() => {
              setVisible(false);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
              setVisible(false);
            }}
          >
            Yes, remove
          </button>
        </ContentConfirm>
      </Container>
    );
  }
};

export default ConfirmWindow;
