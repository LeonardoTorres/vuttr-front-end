import { takeLatest, all, put } from "redux-saga/effects";
import { Creators as ToolsActions, Types } from "./actions";

export function* createTool({ tool }) {
  yield put(
    ToolsActions.createToolSuccess({
      id: "test",
      name: "chamou"
    })
  );
}

export default function* rootSaga() {
  yield all([takeLatest(Types.CREATE_TOOL_REQUEST, createTool)]);
}
