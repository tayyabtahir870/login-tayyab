import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formSubmit=(e)=>{
      e.preventDefault()
      console.log("email",email)
      console.log("password",password)
      // setEmail('');
      // setPassword('');
  }
  return (
    <div className="login">
      <div className="container p-5  ">
        <div className=" card text-center  py-5  ">
          <form onSubmit={formSubmit}>
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
              onChange={event=>{setPassword(event.target.value)}}
              placeholder="Enter Your Password"
            />
            <br />
            <br />
            <button type="submit"  className="btn btn-dark">
              Submit
            </button>
            <h5 className="text-center">or</h5>
            <Link type="button" className="btn btn-dark" to="">
              {" "}
              Create Account
            </Link>
            <br />
            <h5>Follow us on</h5>
            <span>
              <BsFacebook color="#1773EA" size={30} /> &nbsp;
              <AiFillTwitterCircle color="#1DA1F2 " size={30} />
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
