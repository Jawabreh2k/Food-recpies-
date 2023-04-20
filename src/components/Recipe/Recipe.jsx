import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipe } from "../../Redux/actions/dishes";
import { useParams } from "react-router-dom";
import { Typography, Paper } from "@material-ui/core";
import CommentForm from "../CommentForm/CommentForm";
import "./Recipe.module.css";
const Recipe = () => {
  const dispatch = useDispatch();
  const { subDishId } = useParams();
  const recipe = useSelector((state) => state.dishes.recipe[0]);

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
    <div className="recipe">
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
        {recipe.description && (
          <div>
            <Typography variant="h6">Description:</Typography>
            <p>{recipe.description}</p>
          </div>
        )}
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
