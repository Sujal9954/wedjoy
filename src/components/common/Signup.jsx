import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log("Form submitted", data); 

    try {
      data.roleId = "67c11f8dfefe67927baad944"; 
      const res = await axios.post("/user", data); 

      console.log("Response:", res);
      console.log("Response Data:", res.data);

      if (res.status === 201) {
        toast.success("User created successfully! 🎉", {
          position: "top-right",
          autoClose: 3000, 
        });

        setTimeout(() => {
          navigate("/user");
        }, 2000);
  
      } else {
        toast.error("Signup failed!", {
          position: "center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      toast.error("Something went wrong. Try again!", {
        position: "center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div style={{
      width: "29%",
      margin: "auto",
      alignItems:"center",
      background: "#f8f8f8",
      marginTop:"90px",
      // backgroundColor:"#93C",
      padding: "50px",
      borderRadius: "8px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      justifyContent:"center",
      // height:"100vh",  
      // display:"flex"
    }}>
      <h1 style={{
        fontFamily: "Georgia, serif",
        fontSize: "24px",
        color: "#333"
      }}> SIGNUP</h1><br />
      
      <form onSubmit={handleSubmit(submitHandler)} style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }}>
        <div>
          <label style={{ fontWeight: "bold", fontSize: "14px", textAlign: "left" }}>First Name</label>
          <input type="text" {...register("name")} required style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px"
          }} />
        </div>

        <div>
          <label style={{ fontWeight: "bold", fontSize: "14px", textAlign: "left" }}>Email</label>
          <input type="email" {...register("email")} required style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px"
          }} />
        </div>

        <div>
          <label style={{ fontWeight: "bold", fontSize: "14px", textAlign: "left" }}>Phone Number</label>
          <input 
            type="tel"
            {...register("phone", { 
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid phone number",
              }
            })} 
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              fontSize: "16px"
            }}
          />
        </div>

        <div>
          <label style={{ fontWeight: "bold", fontSize: "14px", textAlign: "left" }}>Password</label>
          <input type="password" {...register("password")} required style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px"
          }} />
        </div>

        <div>
          <input type="submit" value="Sign Up" style={{
            background: "#5c67f2",
            color: "white",
            cursor: "pointer",
            fontSize: "18px",
            border: "none",
            padding: "10px",
            borderRadius: "5px"
          }} />
        </div>
        <p>Already have an account?<Link to={"/login"}>LOGIN HERE</Link></p>

      </form>
      
      <ToastContainer />
    </div>
  );
};
