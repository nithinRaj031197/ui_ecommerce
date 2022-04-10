import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authenticate } from "../../redux/auth/authSlice";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialState = {
    email: "",
    password: "",
  };

  const [inputValues, setInputValues] = useState(initialState);

  const handleRegistrationForm = (e) => {
    e.preventDefault();
    console.log(inputValues);
    const loginFormData = {
      email: inputValues.email,
      password: inputValues.password,
    };
    console.log("form submitted value", JSON.stringify(loginFormData));

    axios
      .post(
        "http://localhost:5000/api/auth/login",
        JSON.stringify(loginFormData),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data?.message);
        const loginSuccessfulData = {
          token: res.data?.token,
          isAuth: true,
        };
        dispatch(authenticate(loginSuccessfulData));
        // console.log(res.data);
        const localValue = {
          responseData: res?.data,
          isAuth: true,
        };
        localStorage.setItem("user", JSON.stringify(localValue));
        navigate("/");
      })
      .catch((err) => {
        const errorArray = err?.response?.data?.errors;

        if (errorArray) {
          errorArray.map((errorValue) => {
            toast.error(errorValue?.msg);
            console.log(errorValue?.msg);
          });
        } else {
          toast.error(err?.response?.data?.message);
          console.log(err);
        }
      });
  };
  return (
    <div className="login_container">
      <div className="login_card">
        <h1 className="login_title">Sign in</h1>
        <form className="login_form" onSubmit={handleRegistrationForm}>
          <input
            className="input_field"
            type="email"
            name="email"
            placeholder="Enter the email"
            autoComplete="off"
            onChange={(e) =>
              setInputValues({ ...inputValues, email: e.target.value })
            }
          />

          <input
            className="input_field"
            type="password"
            name="password"
            placeholder="Enter the password"
            autoComplete="off"
            onChange={(e) =>
              setInputValues({ ...inputValues, password: e.target.value })
            }
          />

          <button type="submit" className="login_button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
