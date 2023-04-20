import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
import MainDish from "./components/MainDish/MainDish";
import Recipe from "./components/Recipe/Recipe";
import AddDish from "./components/AddDish/AddDish";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
