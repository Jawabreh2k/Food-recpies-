import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Navbar.css"; // import the CSS file

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar className="navbar-container">
        <Typography variant="h6">
          <Link to="/" className="navbar-link">
            Recipe App
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/add-dish">
          Add Dish
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
