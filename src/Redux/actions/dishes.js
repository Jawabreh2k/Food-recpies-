import { FETCH_MAIN_DISHES, FETCH_SUB_DISHES, FETCH_RECIPE } from "./types";
import axios from "axios";

export const fetchMainDishes = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/mainDishes");
    const categories = res.data;
    dispatch({
      type: FETCH_MAIN_DISHES,
      payload: categories,
    });
  } catch (error) {
    console.error("Error fetching main dishes:", error);
  }
};

export const fetchSubDishes = (mainDishId) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/subDishes");
    const meals = res.data.filter(
      (meal) => meal.mainDishId === mainDishId.toString()
    );
    dispatch({
      type: FETCH_SUB_DISHES,
      payload: meals,
    });
  } catch (error) {
    console.error("Error fetching sub dishes:", error);
  }
};

export const fetchRecipe = (subDishId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/recipes`);
      const recipe = response.data.filter(
        (recipe) => recipe.subDishId === subDishId.toString()
      );
      dispatch({ type: FETCH_RECIPE, payload: recipe });
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };
};

export const addDish = (dish) => {
  return async (dispatch) => {
    try {
      const newSubDish = await axios.post("http://localhost:5000/subDishes", {
        mainDishId: dish.mainDishId,
        name: dish.name,
        image: dish.image,
      });

      const newRecipe = await axios.post("http://localhost:5000/recipes", {
        subDishId: newSubDish.data.id,
        name: dish.name,
        ingredients: dish.ingredients,
        description: dish.description,
        instructions: dish.instructions,
      });

      dispatch(fetchSubDishes(dish.mainDishId));

      dispatch(fetchRecipe(newSubDish.data.id));
    } catch (error) {
      console.error("Error adding dish:", error);
    }
  };
};
