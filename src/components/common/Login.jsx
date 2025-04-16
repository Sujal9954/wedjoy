import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const loginsuccess = () => toast.success("Login Successful! 🎉");
  const loginfail = () => toast.error("Invalid credentials!");
  const invalid = () => toast.error("Something went wrong. Try again!");

  const submitHandler = async (data) => {
    console.log("Form submitted", data);

    try {
      const res = await axios.post("/user/login", data);

      console.log("Response:", res);
      console.log("Response Data:", res.data);

      if (res.status === 200) {
        loginsuccess();
        setTimeout(() => {
          // navigate("/user");
        }, 2000);

        localStorage.setItem("id", res.data.data._id);
        localStorage.setItem("role", res.data.data.roleId.name);
      } else {
        loginfail();
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      invalid();
    }
  };

  return (
    <div
      style={{
        width: "30%",
        margin: "auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        marginTop: "160px",  
      }}
    >
      <h1
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "24px",
          color: "#333",
        }}
      >
        LOGIN
      </h1>

      <form
        onSubmit={handleSubmit(submitHandler)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div>
          <label
            style={{
              fontWeight: "bold",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
        </div>

        <div>
          <label
            style={{
              fontWeight: "bold",
              fontSize: "14px",
              textAlign: "left",
            }}
          >
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          />
        </div>

        <div>
          <input onClick={() => navigate("/plan")}
            type="submit"
            value="Login"
            style={{
              background: "#5c67f2",
              color: "white",
              cursor: "pointer",
              fontSize: "18px",
              border: "none",
              padding: "10px",
              borderRadius: "5px",
            }}
          />
        </div>
        <p>Not have an account?<Link to={"/signup"}>SIGN UP HERE</Link></p>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={100}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
};
