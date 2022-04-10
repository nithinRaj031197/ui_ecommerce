import React from "react";
import Footer from "../../components/footer/Footer";
import { NavbarHome } from "../../components/navbar/Navbar";
import ProductList from "../../components/productList/ProductList";

const Products = () => {
  return (
    <div style={{ position: "relative" }}>
      <NavbarHome />
      <div style={{ position: "absolute", top: "80px" }}>
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
