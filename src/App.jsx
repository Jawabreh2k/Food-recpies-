import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage";
import MainDish from "./components/MainDish";
import Recipe from "./components/Recipe";
import AddDish from "./components/AddDish";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main-dish/:mainDishId" element={<MainDish />} />
        <Route path="/recipe/:subDishId" element={<Recipe />} />
        <Route path="/add-dish" element={<AddDish />} />
      </Routes>
    </Router>
  );
};

export default App;
