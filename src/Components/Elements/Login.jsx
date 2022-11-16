import React from "react";
import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Login({title, setEmail, setPassword, handleAction}) {
  return (
    <div className="login">
      <div className="container p-5  ">
        <div className=" card text-center  py-5  ">
          <h1>Login </h1> <br />
          <h5>Lets go gets started</h5>
          <br />
          <label>Email</label> <br />
          <input
            className="btn1"
            type="text"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="Enter Your Username"
          />
          <br />
          <br />
          <label>Password</label> <br />
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
          <br />
          <button type="submit" className="btn btn-dark" onClick={handleAction}>
            {title}
          </button>
          <Link to="/signup">Signup</Link>
          <h5>Follow us on</h5>
          <span>
            <BsFacebook color="#1773EA" size={30} /> &nbsp;
            <AiFillTwitterCircle color="#1DA1F2 " size={30} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
