import {
  FETCH_MAIN_DISHES,
  FETCH_SUB_DISHES,
  FETCH_RECIPE,
  ADD_DISH,
} from "./types";
import axios from "axios";

import data from "../../../public/data.json";

export const fetchMainDishes = () => async (dispatch) => {
  const categories = data.mainDishes.map((category) => {
    const thumbnail = `${category.strCategoryThumb}/preview`;
    return {
      ...category,
      strCategoryThumb: thumbnail,
    };
  });

  dispatch({
    type: FETCH_MAIN_DISHES,
    payload: categories,
  });
};

// Update fetchSubDishes action creator
export const fetchSubDishes = (mainDishId) => async (dispatch) => {
  const storedSubDishes = JSON.parse(localStorage.getItem("subDishes"));
  const meals = storedSubDishes
    ? storedSubDishes.filter((meal) => meal.mainDishId === mainDishId)
    : data.subDishes.filter((meal) => meal.mainDishId === mainDishId);

  dispatch({
    type: FETCH_SUB_DISHES,
    payload: meals,
  });
};

// Update fetchRecipe action creator
export const fetchRecipe = (subDishId) => async (dispatch, getState) => {
  const state = getState();
  const newDish = state.dishes.newSubDish;

  // If the newly added dish matches the requested subDishId, use it as the recipe
  if (newDish && newDish.id === subDishId) {
    dispatch({
      type: FETCH_RECIPE,
      payload: newDish,
    });
  } else {
    // Else, fetch the recipe from the JSON file as before
    try {
      const res = await axios.get(
        `${process.env.PUBLIC_URL}/data/recipes/${subDishId}.json`
      );
      dispatch({
        type: FETCH_RECIPE,
        payload: res.data,
      });
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  }
};

// dishes.js
// ...
// dishes.js
export const addDish = (dish) => {
  return (dispatch) => {
    const newId = Date.now();

    const updatedSubDishes = [
      ...JSON.parse(localStorage.getItem("subDishes")),
      {
        id: newId,
        mainDishId: dish.mainDishId,
        name: dish.name,
        image: dish.image,
      },
    ];

    const updatedRecipes = [
      ...JSON.parse(localStorage.getItem("recipes")),
      {
        subDishId: newId,
        name: dish.name,
        ingredients: dish.ingredients,
        description: dish.description,
      },
    ];

    localStorage.setItem("subDishes", JSON.stringify(updatedSubDishes));
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));

    dispatch({
      type: ADD_DISH,
      payload: {
        ...dish,
        id: newId,
        timestamp: Date.now(),
      },
    });

    // Dispatch updated subDishes
    dispatch({
      type: FETCH_SUB_DISHES,
      payload: updatedSubDishes,
    });
  };
};
