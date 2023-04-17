import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import MainDish from "./MainDish";
import Recipe from "./Recipe";
import AddDish from "./AddDish";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main-dish/:mainDishId" element={<MainDish />} />
          <Route path="/recipe/:subDishId" element={<Recipe />} />
          <Route path="/add-dish" element={<AddDish />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
