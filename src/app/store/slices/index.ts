import { combineReducers } from "@reduxjs/toolkit";
import { api } from "../../api/api.service";
import authSlice from "./authSlice";

export const rootReducer = combineReducers({
  auth: authSlice,
  [api.reducerPath]: api.reducer,
});
