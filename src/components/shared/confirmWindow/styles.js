import styled from "styled-components";

export const Container = styled.div`
  display: ${props => props.visible?'block':'none'};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99999;
`;

