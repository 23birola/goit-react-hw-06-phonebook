import { combineReducers } from "redux";
// import filterReducer from "./filter";
import contactReducer from "./contactReducer";

export const rootReducer = combineReducers({
  items: contactReducer,
//   filter: filterReducer,
});
