import React from "react";
import { NavbarProduct } from "../../components/navbar/Navbar";
import ProductItem from "../../components/pd/ProductItem";

const ProductDetail = () => {
  return (
    <div style={{ position: "relative" }}>
      <NavbarProduct />
      <div
        style={{
          position: "absolute",
          top: "80px",
        }}
      >
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductDetail;
