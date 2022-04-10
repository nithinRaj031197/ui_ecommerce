import React, { useEffect } from "react";
import Card from "../card/Card";
import "./productlist.css";
// import { productList } from "../../dummyData"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  getReduxProducts,
  storeProducts,
} from "../../redux/product/productSlice";

const ProductList = () => {
  const productList = useSelector(getReduxProducts);
  console.log("reduxProductList", productList);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:5000/api/product/").then((res) => {
      console.log(res.data);
      dispatch(storeProducts(res.data?.products));
    });
  }, []);

  return (
    <div className="main_productlist">
      {productList.map((value, index) => {
        return (
          <div key={value._id}>
            <Card productValue={value} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
