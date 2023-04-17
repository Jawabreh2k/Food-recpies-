import {
  FETCH_MAIN_DISHES,
  FETCH_SUB_DISHES,
  FETCH_RECIPE,
  ADD_DISH,
} from "../actions/types";

const initialState = {
  mainDishes: [],
  subDishes: JSON.parse(localStorage.getItem("subDishes")) || [],
  recipe: {},
};
const dishesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MAIN_DISHES:
      return { ...state, mainDishes: action.payload };
    case FETCH_SUB_DISHES:
      return { ...state, subDishes: action.payload };
    case FETCH_RECIPE:
      return { ...state, recipe: action.payload };
    default:
      return state;
  }
};

export default dishesReducer;
