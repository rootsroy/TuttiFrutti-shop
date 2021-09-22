import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import hero from '../assets/hero2.jpg'

const Home = () => {


  return (
    <div className="container">
      <img src={hero} alt="hero" className="hero" />
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
