import React from "react";
import { Link } from "react-scroll";
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

function Login() {
  return (
    <div className="login">
      <div className="container p-5  ">
        <div className=" card text-center  py-5  ">
          <h1>Login </h1> <br />
          <h5>Lets go gets started</h5>
          <br />
          <h5>Username</h5>
          <input
            className="btn1"
            type="text"
            placeholder="Enter Your Username"
          />
          <br />
          <br />
          <h5>Password</h5>
          <input className="btn1" type="password" placeholder="Enter Your Password" />
          <br />
          <br />
          <button  type="button" class="btn btn-dark">
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
          <BsFacebook color="#1773EA" size={30}/> &nbsp;
          <AiFillTwitterCircle color="#1DA1F2 " size={30}/>
          </span>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
