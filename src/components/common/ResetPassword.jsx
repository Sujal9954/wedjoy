import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export const ResetPassword = () => {
  const token=useParams().token

  const {register,handleSubmit}=useForm()

  const submitHandler=async(data)=>{
    const obj={
      token:token,
      password:data.password
    }

    console.log(data)
    const res=await axios.post("/user/resetpassword",obj)
    console.log(res.data)

  } 

  return (
    <div style={{textAlign:"center"}}>
        <br /><br /><br />
    <h1> RESET PASSWORD COMPONENET </h1>
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label>NEW PASSWORD</label>
        <input type='password' {...register("password")}></input>
      </div>

      <div>
        <label>confirm PASSWORD</label>
        <input type='password' {...register("password")}></input>
      </div>
      <div>
      <input type='submit'></input>
      </div>

    </form>
    </div>
  )
}
