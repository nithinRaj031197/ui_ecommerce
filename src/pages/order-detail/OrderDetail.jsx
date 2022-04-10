import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./orderDetail.css";
import { NavbarHome } from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createCartList, getCartList } from "../../redux/cart/cartSlice";

const OrderDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartList = useSelector(getCartList);
  console.log(cartList);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cart/")
      .then((res) => {
        // console.log(res?.data);
        // dispatch(createCartList(res?.data?.carts));
      })
      .catch((err) => console.log(err));
  }, []);

  // const singleCartItem =

  return (
    <>
      <NavbarHome />
      <div className="orderDetail_title">YOUR BAG</div>
      <div className="orderDetail_container">
        <div className="left_container">
          {/* {cartList.map((value, index) => {
            console.log(value); */}
          // const productId = return (
          <>
            <div className="orderDetail_list">
              <div className="orderDetail_image_container">
                <img
                  className="orderDetail_image"
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                  alt=""
                />
              </div>
              <div className="orderDetail_detail_container">
                <p className="pl_title">Product name</p>
                <p className="pl_id">23567876543234</p>
              </div>
              <div className="orderDetail_quantity_container">
                <div className="product_amount_container">
                  <div className="add_button">
                    <AddIcon />
                  </div>
                  <div className="product_quantity">1</div>
                  <div className="remove_button">
                    <RemoveIcon />
                  </div>
                </div>
                <div className="product_price">
                  <div className="orderDetail_price_container">
                    <div className="orderDetail_ruppee">&#8377;</div>
                    <span className="orderDetail_price_value">10000</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="divider_line" />
          </>
          );
          {/* })} */}
        </div>
        <div className="right_container">
          <div className="orderDetail_summary_container">
            <p className="os_title">ORDER SUMMARY</p>
            <div className="summary_item">
              <p className="summary_item_text">Sub Total</p>
              <p className="summary_item_price">&#8377; 10000</p>
            </div>
            <div className="summary_item">
              <p className="summary_item_text">Discount</p>
              <p className="summary_item_price">10%</p>
            </div>
            <div className="summary_item">
              <p className="summary_item_text">Total</p>
              <p className="summary_item_price">&#8377; 9000</p>
            </div>
            <button className="checkout_btn">CHECKOUT</button>
            <button
              className="continue"
              onClick={() => {
                navigate("/products");
              }}
            >
              BACK TO SHOPPING
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
