import { createReducer } from "reduxsauce";
import { Types } from "./actions";

const INITIAL_STATE = {
    tool:null,
    toolsList:[],
    loading:false,
    error:false
}

const createToolRequest = (state=INITIAL_STATE, action) =>({
   ...state,
   loading:true
});

const createToolSuccess = (state=INITIAL_STATE, action) =>({
    ...state,
    loading:false,
    tool:action.tool,
 });

 export default createReducer(INITIAL_STATE, {
    [Types.CREATE_TOOL_REQUEST]:createToolRequest,
    [Types.CREATE_TOOL_SUCCESS]:createToolSuccess
 })