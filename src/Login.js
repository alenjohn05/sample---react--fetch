import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  
  const navigate = useNavigate()

  const handleSubmitValue = (e) => {
    if (e.username === "admin123" && e.password === "123456") {
      toast.success("You are logged in!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate('/home')
    } else {
        toast.error("You are Not logged in!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }
  };

  return (
    <>
      <div>Login page</div>
     
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh", width: "100vw" }}
      >
        <div className="card p-4 ">
          <form onSubmit={handleSubmit(handleSubmitValue)}>
            <label htmlFor="username">
              <input
                id="username"
                placeholder="username"
                type="text"
                {...register("username", {
                  required: true,
                })}
              ></input>
              {errors.username && <span>username is required</span>}
            </label>
            <label htmlFor="password">
              <input
                id="password"
                type="password"
                placeholder="password"
                {...register("password", { required: true, minLength: 3 })}
              ></input>
              {errors.password && <span>password is required</span>}
            </label>
            <button type="submit">Submit Details</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
