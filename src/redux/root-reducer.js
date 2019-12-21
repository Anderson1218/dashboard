import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import themeReducer from "./theme/theme.reducer";
import layoutReducer from "./layout/layout.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  theme: themeReducer,
  layout: layoutReducer
});

export default rootReducer;
