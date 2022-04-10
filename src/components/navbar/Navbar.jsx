import React from "react";
import "./navbar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCartCount } from "../../redux/cart/cartSlice";

export const NavbarHome = () => {
  let activeStyle = {
    textDecoration: "none",
    color: "#fff",
  };

  let inActiveStyle = {
    textDecoration: "none",
    color: "#000",
  };
  return (
    <div className="navbar_container">
      <div className="left_nav">
        <img
          className="logo"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
          alt="company"
        />
      </div>
      <div className="center_nav">
        <h1>Company</h1>
      </div>
      <div className="right_nav">
        <ul className="navigation_links">
          <li className="links">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              Home
            </NavLink>
          </li>
          <li className="links">
            <NavLink
              to="/products"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              Poducts
            </NavLink>
          </li>
          <li className="links">
            <NavLink
              to="/order"
              style={({ isActive }) => (isActive ? activeStyle : inActiveStyle)}
            >
              Orders
            </NavLink>
          </li>
          <li className="links">
            <button className="logout">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const NavbarProduct = () => {
  const cartCount = useSelector(getCartCount);
  console.log(cartCount);

  const navigate = useNavigate();

  const goToOrderPage = () => {
    navigate("/order");
  };

  return (
    <div className="navbar_container">
      <div className="left_nav">
        <img
          className="logo"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
          alt="company"
        />
      </div>
      <div className="center_nav">
        <h1>Company</h1>
      </div>
      <div className="right_nav" onClick={goToOrderPage}>
        <ShoppingCartIcon />
        <div className="cart_quantity">
          <span>{cartCount?.count}</span>
        </div>
      </div>
    </div>
  );
};
