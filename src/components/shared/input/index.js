import React from "react";
import { InputContainer, InputWrapper } from "./styles";

const Input = props => {
  const { type, name, label, onChange, placeholder } = props;
  
  return (
    <InputContainer>
      <label>{label}</label>
      <InputWrapper type={type} name={name} onChange={onChange} placeholder={placeholder} />
    </InputContainer>
  );
};
export default Input;
