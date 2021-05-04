import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
  //In this large json object which would be our state the key would be the slicc that points towards
  // the reducer and the value is the value of the userReducer itself

  user: userReducer,
});
