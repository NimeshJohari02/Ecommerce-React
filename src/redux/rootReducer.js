import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
//! This returns storage from the browser that is window.localStorage
import { persistReducer } from "redux-persist";
import userReducer from "./user/user.reducer";
import directoryReducer from "./directory/directory.reducer";
import cartReducer from "./cart/cart.reducer";
const persistConfig = {
  key: "root",
  storage: storage,
  //! WhiteList allows us to add the which storage would you like to persist
  whitelist: ["cart", "directory"],
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});
//In this large json object which would be our state the key would be the slicc that points towards
// the reducer and the value is the value of the userReducer itself
export default persistReducer(persistConfig, rootReducer);
