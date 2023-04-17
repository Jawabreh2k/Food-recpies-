import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Recipe App
          </Link>
        </Typography>
        <Button color="inherit">
          <Link
            to="/add-dish"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Add Dish
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
