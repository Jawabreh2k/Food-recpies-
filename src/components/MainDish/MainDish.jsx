import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubDishes } from "../../Redux/actions/dishes";
import { useParams } from "react-router-dom";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./MainDish.css";

const MainDish = () => {
  const dispatch = useDispatch();
  const { mainDishId } = useParams();
  const subDishes = useSelector((state) => state.dishes.subDishes);

  useEffect(() => {
    dispatch(fetchSubDishes(mainDishId));
  }, [dispatch, mainDishId]);

  return (
    <div className="mainDish">
      <Typography variant="h4" align="center" style={{ margin: "1rem" }}>
        Sub-Dishes
      </Typography>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        className="mainDish-grid"
      >
        {subDishes &&
          subDishes.map((subDish) => (
            <Grid
              item
              key={subDish.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="mainDish-gridItem"
            >
              <div className="container">
                <Paper elevation={2} className="mainDish-paper">
                  <img
                    src={subDish.image}
                    alt={subDish.name}
                    className="mainDish-image"
                  />
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
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default MainDish;
