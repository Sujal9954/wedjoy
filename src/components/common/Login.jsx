import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginsuccess = () => toast.success("Login Successful! 🎉");
  const loginfail = () => toast.error("Invalid credentials!");
  const invalid = () => toast.error("Something went wrong. Try again!");

  const submitHandler = async (data) => {
  console.log("Form submitted", data);

  try {
    const res = await axios.post("/user/login", data); // Make sure the backend URL is correct
    console.log("Response:", res);

    if (res.status === 200 && res.data && res.data.data) { // Check if response contains data
      loginsuccess();
      localStorage.setItem("id", res.data.data._id);
      localStorage.setItem("role", res.data.data.roleId.name);
      
      setTimeout(() => {
        const role = res.data.data.roleId.name;
      
        if (role === "USER") {
          navigate("/");
        } else if (role === "ADMIN") {
          navigate("/admin");
        } else if (role === "VENDOR") {
          navigate("/vendorpanel");
        } 
      }, 1000);
      
    } else {
      loginfail();
    }
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error.message);
    invalid();
  }
};

  return (
    <div className="py-8">
      <div style={{ width: "30%", margin: "auto", padding: "20px", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", textAlign: "center", marginTop: "160px" }}>
      <h1 style={{ fontFamily: "Georgia, serif", fontSize: "24px", color: "#333" }}>LOGIN</h1>

      <form onSubmit={handleSubmit(submitHandler)} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label style={{ fontWeight: "bold", fontSize: "14px", textAlign: "left" }}>Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" } })}
            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
          />
          {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email.message}</p>}
        </div>

        <div>
          <label style={{ fontWeight: "bold", fontSize: "14px", textAlign: "left" }}>Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required", minLength: { message: "Password must be at least 6 characters" } })}
            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
          />
          {errors.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password.message}</p>}
        </div>

        <div>
          <input type="submit" value="Login" style={{ background: "#5c67f2", color: "white", cursor: "pointer", fontSize: "18px", border: "none", padding: "10px", borderRadius: "5px" }} />
        </div>
        <p>Not have an account? <Link to="/signup">SIGN UP HERE</Link></p>
      </form>

      <ToastContainer position="top-center" autoClose={100} hideProgressBar={false} closeOnClick={false} pauseOnHover theme="dark" transition={Bounce} />
    </div>
    </div>
  );
};
