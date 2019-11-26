import { combineReducers } from "redux";
import authReducer from './AuthReducers';
import errorReducer from './ErrorReducers';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});