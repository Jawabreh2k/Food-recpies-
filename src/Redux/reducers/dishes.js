import {
  FETCH_MAIN_DISHES,
  FETCH_SUB_DISHES,
  FETCH_RECIPE,
  ADD_DISH,
  ADD_RECIPE,
} from "../actions/types";

const initialState = {
  mainDishes: [],
  subDishes: [],
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

    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    default:
      return state;
  }
};

export default dishesReducer;
