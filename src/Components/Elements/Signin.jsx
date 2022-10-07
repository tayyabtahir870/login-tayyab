import React from 'react'
import {Link } from 'react-scroll'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

function Signin() {
  return (
    <div className="login1">
    <div className="container p-5  ">
      <div className=" card text-center  py-5  ">
        <h1>Sign up </h1> <br />
        <h5>Please Enter your Details to join us</h5>
        <br />
        <h5>Email</h5>
        <input
          className="btn1"
          type="text"
          placeholder="Enter Your Username"
        />
        <br />
        <h5>Password</h5>
        <input className="btn1" type="password" placeholder="Enter Your Password" />
        <br />
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
  )
}

export default Signin