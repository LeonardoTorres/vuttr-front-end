import React, { useEffect } from "react";
import { ListContainer } from "./styles";
import ItemList from "./item";

// import { Container } from './styles'

const ToolsList = props => {
  const { items, onRemove } = props;
  return (
    <ListContainer>
      {items.map(i => (
        <ItemList key={i.id} onRemove={() => onRemove(i.id)}>
          {i}
        </ItemList>
      ))}
    </ListContainer>
  );
};

export default ToolsList;
