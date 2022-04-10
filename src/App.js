import "./App.css";

import React from "react";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/product-detail/ProductDetail";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import OrderDetail from "./pages/order-detail/OrderDetail";
import Register from "./pages/register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import { getAuthenticated } from "./redux/auth/authSlice";

const App = () => {
  const auth = useSelector(getAuthenticated);
  console.log(auth);

  const appAuth = auth?.isAuth;

  const jsonLocalStorage = localStorage.getItem("user");
  const localStorageValue = JSON.parse(jsonLocalStorage);

  const localAuth = localStorageValue?.isAuth;
  console.log(localAuth);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          {appAuth == false ? (
            <>
              <Routes>
                <Route path="/" element={<Register />} />
              </Routes>
              <Routes>
                <Route path="/login" element={<Login />} />
              </Routes>
            </>
          ) : (
            <>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
              <Routes>
                <Route path="/products" element={<Products />} />
              </Routes>
              <Routes>
                <Route path="/product/:id" element={<ProductDetail />} />
              </Routes>

              <Routes>
                <Route path="/order" element={<OrderDetail />} />
              </Routes>
            </>
          )}
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};

export default App;
