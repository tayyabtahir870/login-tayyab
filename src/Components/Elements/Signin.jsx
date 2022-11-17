import React from "react";
import { Link } from "react-router-dom";

function Signin({ title, setEmail, setPassword, handleAction }) {
  return (
    <div className="signup">
      <div className="container p-5  ">
        <div className="row">
          <div className="col-md-6">
          <div className=" card text-center  py-5  ">
          <h1>Sign up </h1>
          <h5>Please Enter your Details to join us</h5>

          <label>
            <b>Email</b>
          </label>
          <input
            className="btn1"
            type="text"
            placeholder="Enter Your email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <br />
          <label>
            <b>Choose Password</b>
          </label>
          <input
            className="btn1"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Enter Your Password"
          />
          <br />

          <button type="submit" className="btn btn-dark" onClick={handleAction}>
            {title}{" "}
          </button>
          <br />
          <Link type="button" to="/login" class="btn btn-secondary">
            Login
          </Link>
          <br />
        </div>
          </div>

          <div className="col-md-6">
            <img className="img-fluid mt-5" src="Assests/signup.jpg" alt="" width={500} />

          </div>
        
      </div>
    </div>
    </div>
  );
}

export default Signin;
