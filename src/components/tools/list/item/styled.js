import styled from "styled-components";

export const ItemContainer  = styled.div`
   
   margin-top:15px;  
   padding: 5px;
   box-shadow: 0 0px 0px 0 rgba(0,0,0,0.16), 1px 2px 7px 0 rgba(0,0,0,0.12) 
`;

export const SpanTag = styled.span`
  margin-right:5px;
  background-color: ${props => props.checked? '#ccc':'#fff'}
`

export const ItemTitle = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`
export const SpanRemove = styled.span`
  padding:5px;
  &:hover {
    cursor: pointer;
  }
`