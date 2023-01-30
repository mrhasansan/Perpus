import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { userReducer } from "./userReducer";
import { productReducer } from "./productReducer";
import reduxThunk from "redux-thunk";

export const globalStore = configureStore(
  {
    reducer: {
      userReducer,
      productReducer,
    },
  },
  applyMiddleware(reduxThunk)
);
