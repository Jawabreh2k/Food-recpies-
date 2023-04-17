import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubDishes } from "../Redux/actions/dishes";
import { useParams } from "react-router-dom";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const MainDish = () => {
  const dispatch = useDispatch();
  const { mainDishId } = useParams();
  const subDishes = useSelector((state) => state.dishes.subDishes);

  useEffect(() => {
    dispatch(fetchSubDishes(mainDishId));
  }, [dispatch, mainDishId]);
  console.log(subDishes);
  return (
    <div>
      <Typography variant="h4" align="center" style={{ margin: "1rem" }}>
        Sub-Dishes
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {subDishes &&
          subDishes.map((subDish) => (
            <Grid item key={subDish.id} xs={12} sm={6} md={4} lg={3}>
              <Paper
                elevation={3}
                style={{ padding: "1rem", textAlign: "center" }}
              >
                <Typography variant="h5">{subDish.name}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/recipe/${subDish.id}`}
                  style={{ marginTop: "1rem" }}
                >
                  View Recipe
                </Button>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default MainDish;
