import { combineReducers } from "@reduxjs/toolkit";
import cvDataSlice from "./cvDataSlice";

const rootReducer = combineReducers({
  cvData: cvDataSlice,
});

export default rootReducer;
