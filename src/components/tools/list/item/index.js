import React, { useState } from "react";
import { ItemContainer, SpanTag, ItemTitle, SpanRemove } from "./styled";
import ConfirmWindow from "../../../shared/confirmWindow";

// import { Container } from './styles';

const ItemList = props => {
  const { children: item, checked, onRemove:remove} = props;

  return (
    <ItemContainer>
      <ItemTitle>
        <h3>{item.title}</h3>

        <ConfirmWindow
          message={
            <span>
              Are you sure you want remove <b>{item.title}?</b>
            </span>
          }
          onConfirm={remove}
        >
          <a href="#">remove</a>
        </ConfirmWindow>
      </ItemTitle>

      <p>{item.description}</p>
      <p>
        {item.tags.map(tag => (
          <SpanTag key={tag} checked={checked}>
            #{tag}
          </SpanTag>
        ))}
      </p>
    </ItemContainer>
  );
};

export default ItemList;
