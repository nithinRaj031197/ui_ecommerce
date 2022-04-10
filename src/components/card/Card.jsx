import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  //  const val = props.productValue;

  const { productValue } = props;
  const { name, description, price, image, _id } = productValue;
  // console.log(productValue);

  const navigate = useNavigate();

  const viewButtonHandler = () => {
    navigate(`/product/${_id}`);
  };

  return (
    <>
      <div className="productlist_container">
        <div className="top_container">
          <img className="cart_image_container" src={image ?? "loading..."} />
        </div>

        <p className="title">{name}</p>
        <p className="description">{description}</p>
        <div className="bottom_container">
          <button className="view_button" onClick={viewButtonHandler}>
            View
          </button>
          <div className="price_container">
            <div className="ruppee">&#8377;</div>
            <span className="price_value">{price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
