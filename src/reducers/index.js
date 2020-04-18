import restaurantReducer from "./restaurantReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  rest: restaurantReducer,
});

export default allReducers;
