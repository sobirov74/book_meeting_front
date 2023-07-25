import { combineReducers } from "@reduxjs/toolkit";
import auth from "./authReducer";
import reservations from "./reservations";
import toggle from "./toggleReducer";

export default combineReducers({
  auth,
  reservations,
  // toggle,
});
