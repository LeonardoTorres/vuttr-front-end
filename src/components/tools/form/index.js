import React, { useState } from "react";
import { FormContent, FormButton, Button } from "./style";
import Input from "../../shared/input";
import toolsService from "../../../services/toolsService";

const ToolsForm = props => {
  const { createMode, updateMode } = props;
  const [tool, setTool] = useState({
    title: "",
    link: "",
    description: "",
    tags: []
  });

  function handleChange(e) {
    const { name } = e.target;
    let { value } = e.target;
    if (name === "tags") {
      value = value.split(" ");
    }
    setTool({ ...tool, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (createMode) {
      toolsService.create(tool);
    }
  }

  return (
    <div>
      <FormContent>
        <p>Teste</p>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            label="Title"
            onChange={handleChange}
          />
          <Input type="text" name="link" label="Link" onChange={handleChange} />
          <Input
            type="text"
            name="description"
            label="Description"
            onChange={handleChange}
          />
          <Input type="text" name="tags" label="Tags" onChange={handleChange} />
          <FormButton>
            <Button>Add tool</Button>
          </FormButton>
        </form>
      </FormContent>
    </div>
  );
};

export default ToolsForm;
