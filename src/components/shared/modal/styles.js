import styled from 'styled-components';

export const Modal = styled.div`
  position:fixed;
  display: ${ props => props.show?'block':'none'};
  top:0;
  right:0;
  bottom:0;
  left:0;
  background: #fefefe;
  z-index:99999; 
  opacity: ${props =>  props.show ? 2:0};
  
`;
