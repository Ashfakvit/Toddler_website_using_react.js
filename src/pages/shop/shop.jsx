import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./products";
import "./shop.css";
import Header from "../../components/Header/Header";

export const Shop = () => {
  return (
  <div className="navbar">
    <Header />
  <div className="App2">
      <div className="shopTitle">
        <h1>Toddlers World</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
   </div> 
   </div>
   
  );
};
