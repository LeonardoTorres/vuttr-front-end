import React from "react";
import Input from "../input";
import { SearchContainer, SearchGroup } from "./styles";

const SearchHeader = props => {
  const { onClickAddButton } = props;
  return (
    <SearchContainer>
      <div>
        <input type="text" placeholder="Search..." style={{height:'22px',fontSize:"1rem"}}/>
        <input type="checkbox" style={{marginLeft:"10px"}} />
        <span style={{marginLeft:"10px", fontSize:"1rem"}}>
           Tags
        </span>
      </div>
      <button onClick={()=>onClickAddButton(true)}>add</button>
    </SearchContainer>
  );
};

export default SearchHeader;
