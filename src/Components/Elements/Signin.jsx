import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

function Signin({ title, setEmail, setPassword, handleAction }) {
  return (
    <div className="login1">
      <div className="container p-5  ">
        <div className=" card text-center  py-5  ">
          <h1>Sign up </h1> <br />
          <h5>Please Enter your Details to join us</h5>
          <br />
          <label>Email</label> <br />
          <input
            className="btn1"
            type="text"
            placeholder="Enter Your email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <br />
          <br />
          <label>Choose Password</label> <br />
          <input
            className="btn1"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Enter Your Password"
          />
          <br />
          <br />
          <button type="submit" className="btn btn-dark" onClick={handleAction}>
            {title}{" "}
          </button>
          <Link to="/login">Login</Link>
          <br />
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

export default Signin;
