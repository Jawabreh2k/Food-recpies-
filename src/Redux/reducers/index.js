import { combineReducers } from "redux";
import dishesReducer from "./dishes";
import commentsReducer from "./comments";

const rootReducer = combineReducers({
  dishes: dishesReducer,
  comments: commentsReducer,
});

export default rootReducer;
