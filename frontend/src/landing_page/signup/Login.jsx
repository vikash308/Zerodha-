import React, { useState } from "react";
import axios from 'axios'

const Login = () => {
  let [data, setData] = useState({
    email:"",
    password:""
  })
  let [message, setMessage]= useState("")
  let url = process.env.BACKEND_URL;
  let url2 = process.env.FRONTEND_URL;
    function handleChange(e){
        setData((data)=>{
          return{...data,[ e.target.name]:e.target.value}
        })
    }
    async function handleSubmit(e){
      e.preventDefault();
     try {
      const res = await axios.post(`${url}/login`, {
        email: data.email,
        password: data.password,
      });
      console.log("Response:", res.data);
      setData({ email: "", password: "" });

       const token = res.data.token;
    if (token) {
      localStorage.setItem("token", token); 
      alert("Login successful!");
    }
    const name = res.data.user.name;
    window.location.href = ` ${url2}/?token=${token}&name=${name}`;
  
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
            <h3 className="text-center mb-4">Welcome Back</h3>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
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
                  placeholder="Enter your password"
                  value={data.password}
                  onChange={handleChange}
                  name="password"
                  required
                />
              </div>

              {/* Remember me + Forgot Password */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="remember"
                  />
                  <label htmlFor="remember" className="form-check-label">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-decoration-none">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button type="submit" className="btn btn-primary w-100 py-2">
                Log In
              </button>

              {/* Signup Link */}
              <p className="text-center mt-3 mb-0">
                Don’t have an account?{" "}
                <a href="/signup" className="text-decoration-none">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
