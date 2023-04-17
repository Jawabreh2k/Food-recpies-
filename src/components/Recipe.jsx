import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipe } from "../Redux/actions/dishes";
import { useParams } from "react-router-dom";
import { Typography, Paper } from "@material-ui/core";
import CommentForm from "./CommentForm";

const Recipe = () => {
  const dispatch = useDispatch();
  const { subDishId } = useParams();
  const recipe = useSelector((state) => state.dishes.recipe);

  useEffect(() => {
    dispatch(fetchRecipe(subDishId));
  }, [dispatch, subDishId]);

  if (!recipe) {
    return (
      <div>
        <Typography variant="h4" align="center" style={{ margin: "1rem" }}>
          Recipe not found
        </Typography>
      </div>
    );
  }
  return (
    <div>
      <Typography variant="h4" align="center" style={{ margin: "1rem" }}>
        {recipe.name}
      </Typography>
      <Paper elevation={3} style={{ padding: "1rem", margin: "1rem" }}>
        <Typography variant="h6">Ingredients:</Typography>
        <ul>
          {recipe.ingredients &&
            recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
        </ul>
        <Typography variant="h6">Instructions:</Typography>
        <ol>
          {recipe.instructions &&
            recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
        </ol>
      </Paper>
      <CommentForm subDishId={subDishId} />
    </div>
  );
};

export default Recipe;
