import React from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";

const App = () => {
  return (
    <>
      <Navigation />
      <Recommended />
      <Products />
    </>
  );
};

export default App;
