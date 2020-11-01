import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import { reducer as formReducer } from "redux-form";
import productReducer from "./ProductReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  products: productReducer,
});
