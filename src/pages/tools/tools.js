import React, { useEffect, useState } from "react";
import ToolsList from "../../components/tools/list";
import ToolsService from "../../services/toolsService";
import SearchHeader from "../../components/shared/dataSearchHeader";
import { ToolsContainer } from "./styled";
import ModalWindow from "../../components/shared/modal";
import ToolsForm from "../../components/tools/form";
// import { Container } from './styles';

const Tools = props => {
  const [tools, setTools] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const load = async () => {
      const response = await ToolsService.list();
      setTools(response);
    };
    load();
  }, []);


  return (
    <ToolsContainer>
      <SearchHeader onClickAddButton={setShowModal}/>
      <ToolsList items={tools} onRemove={ToolsService.remove} />
      <ModalWindow show={showModal} onClose={()=>{setShowModal(!showModal)}}>
        <ToolsForm createMode/>
      </ModalWindow> 
    </ToolsContainer>
  );
};

export default Tools;
