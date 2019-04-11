import { createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
    createToolRequest:['tool'],
    createToolSuccess:['tool'],
    removeToolRequest:['id'],
    removeToolSuccess:null,
    listToolsRequest:['key'],
    listToolsSuccess:['toolsList']

});

