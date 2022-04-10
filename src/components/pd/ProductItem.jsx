import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./productItem.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { getReduxProducts } from "../../redux/product/productSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { addCart } from "../../redux/cart/cartSlice";

const ProductItem = () => {
  const dispatch = useDispatch();
  const [whistListToggle, setwhistListToggle] = useState(false);

  const handleWishList = () => {
    setwhistListToggle(!whistListToggle);
  };

  const productList = useSelector(getReduxProducts);
  const param = useParams();

  const filteredProduct = productList.filter((item) => item._id === param.id);
  const product = filteredProduct[0];
  const { image, description, name, brand, category, _id, price } = product;

  // console.log(product);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.responseData?.id;
  console.log(userId);

  const cartItem = {
    userId: userId,
    products: [
      {
        productId: _id,
        quantity: 1,
      },
    ],
  };

  const createProductCart = () => {
    axios
      .post("http://localhost:5000/api/cart/create", JSON.stringify(cartItem), {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res?.data);
        toast.success(res?.data?.message);
        dispatch(addCart({ productId: _id }));
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(cartItem);
  };

  const handleBuyNow = () => {
    navigate("/order");
  };

  return (
    <>
      <div className="pd_main_container">
        <div className="pd_container">
          <div className="left_container">
            <img
              className="image_container_pd"
              src={image ?? "loading..."}
              alt=""
            />
          </div>
          <div className="right_container">
            <div className="top_right_container">
              <div className="pd_title_container">
                <div className="pd_title">{name}</div>
                {whistListToggle ? (
                  <i
                    className="fa fa-heart"
                    id="title_wishlist_active"
                    onClick={handleWishList}
                  ></i>
                ) : (
                  <i
                    className="fa fa-heart-o"
                    id="title_wishlist_inactive"
                    onClick={handleWishList}
                  ></i>
                )}
              </div>
              <div className="pd_description">{description}</div>
              <div className="pd_brand">#{brand}</div>
              <div className="category">
                {category?.map((value) => {
                  return (
                    <div key={_id}>
                      <p className="chip">{value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bottom_right_container">
              <div className="pd_price_container">
                <div className="pd_ruppee">&#8377;</div>
                <span className="pd_price_value">{price}</span>
              </div>
              <div className="pd_button_container">
                <button
                  className="back_btn"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  BACK
                </button>
                <button className="pd_cart_button" onClick={createProductCart}>
                  Add to Cart
                </button>
                <button className="buy_now" onClick={handleBuyNow}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
