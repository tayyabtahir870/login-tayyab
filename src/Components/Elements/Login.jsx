import React from "react";
import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Login({ title, setEmail, setPassword, handleAction }) {
  return (
    <div className="login">
      <div className="container p-5  ">
        <div className=" card text-center  py-5  ">
          <h1>Login </h1>
          <h5>Lets go gets started</h5>
          <br />
          <label>
            <b>Email</b>
          </label>
          <input
            className="btn1"
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="Enter Your Username"
          />
          <br />
          <label>
            <b>Password</b>
          </label>
          <input
            className="btn1"
            name="password"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Enter Your Password"
          />
          <br />
          <button type="submit" className="btn btn-dark" onClick={handleAction}>
            {title}
          </button>
          <br />
          <Link type="button" to="/" class="btn btn-secondary">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
