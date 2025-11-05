import React, { useState } from "react";
import axios from "axios"

const Signup = () => {
  let [data, setData]= useState({
    name:"",
    email:"",
    password:""
  })
  let [message, setMessage]= useState("")
  let url = process.env.REACT_APP_BACKEND_URL;;
  function handleChange(e){
      setData((data)=>{
        return{...data,[ e.target.name]:e.target.value}
      })
  }
  async function handleSubmit(e){
    e.preventDefault();
   try {
    const res = await axios.post(`${url}/signup`, {
      name: data.name,
      email: data.email,
      password: data.password,
    });

    setMessage("Signup successful!");
    console.log("Response:", res.data);
    setData({ name: "", email: "", password: "" });

  } catch (error) {
    console.error(error);
    setMessage("Something went wrong. Please try again!");
  }
}
  return (
    <div className="container mt-5 py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow p-4 rounded-4">
            <h3 className="text-center mb-4">Create your account</h3>
            <p>{message}</p>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={data.name}
                  onChange={handleChange}
                  name="name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="name@example.com"
                  value={data.email}
                  onChange={handleChange}
                  name="email"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter a strong password"
                  value={data.password}
                  onChange={handleChange}
                  name="password"
                  required
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100 py-2">
                Sign Up
              </button>

              {/* Login Link */}
              <p className="text-center mt-3 mb-0">
                Already have an account?{" "}
                <Link to="/login" className="text-decoration-none">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
