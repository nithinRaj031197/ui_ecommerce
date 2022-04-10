import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./register.css";

const Register = () => {
  const initialState = {
    username: "",
    email: "",
    date_of_birth: "",
    location: "",
    password: "",
    confirm_password: "",
  };

  const [inputValues, setInputValues] = useState(initialState);
  //   console.log(inputValues);

  const handleRegistrationForm = (e) => {
    e.preventDefault();
    const postFormData = {
      username: inputValues.username,
      email: inputValues.email,
      location: inputValues.location,
      dob: inputValues.date_of_birth,
      password: inputValues.password,
    };

    console.log("form submitted value", JSON.stringify(postFormData));

    axios
      .post(
        "http://localhost:5000/api/auth/register",
        JSON.stringify(postFormData),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        toast.success(res.data?.message);
        // dispatch(authenticate(loginResData));
        console.log(res.data?.message);
      })
      .catch((err) => {
        const errorArray = err?.response?.data?.errors;

        if (errorArray) {
          //express-validator errors
          errorArray.map((errorValue) => {
            toast.error(errorValue?.msg);
            console.log(errorValue?.msg);
          });
        } else {
          //customized-error
          toast.error(err?.response?.data?.message);
          console.log(err?.response?.data?.message);
        }
        console.log(err?.response?.data);
      });
  };

  return (
    <div className="register_container">
      <div className="register_card">
        <h1 className="register_title">Sign up</h1>
        <form className="register_form" onSubmit={handleRegistrationForm}>
          <input
            className="input_field"
            type="text"
            name="username"
            placeholder="Enter the name"
            autoComplete="off"
            onChange={(e) =>
              setInputValues({ ...inputValues, username: e.target.value })
            }
          />
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
            type="date"
            name="date_of_birth"
            placeholder="Enter the date"
            autoComplete="off"
            onChange={(e) =>
              setInputValues({ ...inputValues, date_of_birth: e.target.value })
            }
          />
          <input
            className="input_field"
            type="text"
            name="location"
            placeholder="Enter the location"
            autoComplete="off"
            onChange={(e) =>
              setInputValues({ ...inputValues, location: e.target.value })
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
          <input
            className="input_field"
            type="password"
            name="confirm_password"
            placeholder="Enter the confirm password"
            autoComplete="off"
            onChange={(e) =>
              setInputValues({
                ...inputValues,
                confirm_password: e.target.value,
              })
            }
          />
          <button type="submit" className="register_button">
            Register
          </button>
          <div className="reg_note">
            If you are already Signned up, please{" "}
            <Link to="/login" className="login_route">
              Sign in here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
