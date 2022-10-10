import React from 'react'
import { useState } from 'react'
import {Link } from 'react-scroll'
import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

function Signin() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const formSubmit=(e)=>{
      e.preventDefault()
      console.log("name",name)
      console.log("password",password)

  }
  return (
    <div className="login1">
    <div className="container p-5  ">
      <div className=" card text-center  py-5  ">
        <form onSubmit={formSubmit}>
        <h1>Sign up </h1> <br />
        <h5>Please Enter your Details to join us</h5>
        <br />
        <label>Name</label> <br />
        <input
          className="btn1"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder="Enter Your Username"
        />
        <br />
        <label>Password</label> <br />
        <input className="btn1" type="password"   onChange={event=>{setPassword(event.target.value)}} placeholder="Enter Your Password" />
        <br />
        <br />
        <button type="submit" className="btn btn-dark" to="">
          {" "}
          Create Account
        </button>
        <br />
        <h5>Follow us on</h5>
        </form>
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