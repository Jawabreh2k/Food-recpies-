import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMainDishes } from "../../Redux/actions/dishes";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const dispatch = useDispatch();
  const mainDishes = useSelector((state) => state.dishes.mainDishes);

  useEffect(() => {
    dispatch(fetchMainDishes());
  }, [dispatch]);

  return (
    <div className="landingPage">
      <Typography variant="h4" align="center" style={{ margin: "1rem" }}>
        Main Dishes
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {mainDishes &&
          mainDishes.map((dish) => (
            <Grid item key={dish.idCategory} xs={12} sm={6} md={4} lg={3}>
              <Paper
                elevation={3}
                style={{ padding: "1rem", textAlign: "center" }}
              >
                <img
                  src={dish.strCategoryThumb}
                  alt={dish.strCategory}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
                <Typography variant="h5">{dish.strCategory}</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/main-dish/${dish.idCategory}`}
                  style={{ marginTop: "1rem" }}
                >
                  View Sub-Dishes
                </Button>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default LandingPage;
