import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Login from "./Components/Elements/Login";
import { useNavigate, Routes, Route } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,sendPasswordResetEmail
} from "firebase/auth";
import Signup from "./Components/Elements/Signin";
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Components/Elements/Home";
import Passward from "./Components/Elements/Passward";
import Details from "./Components/Elements/Details";
import Update from "./Components/Elements/Update";
import Upload from "./Components/Elements/Upload";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("auth");
    if (authToken) {
      navigate("/home");
    }
  }, [navigate]);

  const handleAction = (id) => {
    const authenticate = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authenticate, email, password)
        .then((response) => {
          navigate("/home");
          sessionStorage.setItem("auth", response._tokenResponse.refreshToken);
          addDoc(collection(db, "users"), {
            name: name,
            email: email,
            password: password,
            contact: contact,
            address: address,

          });
        })
        .catch((e) => {
          if (e.code === "auth/wrong-password") {
            toast.error("please check the password");
          }
          if (e.code === "auth/user-not-found") {
            toast.error("please check the email");
          }
        });
    }

    if (id === 1) {
      signInWithEmailAndPassword(authenticate, email, password)
        .then((response) => {
          navigate("/home");
          sessionStorage.setItem("auth", response._tokenResponse.refreshToken);
        })
        .catch((e) => {
          if (e.code === "auth/wrong-password") {
            toast.error("please check the password");
          }
          if (e.code === "auth/user-not-found") {
            toast.error("please check the email");
          }
        });
    }

   

  };
  const passwardRset = () => {

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('verify')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

 
  return (
    <div >
      <ToastContainer />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details/>} />
        <Route path="/update/:id" element={<Update/>} />
        <Route path="/passward" element={<Passward
        passwardReset={passwardRset}
        setEmail={setEmail}
        />} />
        <Route
          path="/login"
          element={
            <Login
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
              title={"Login"}
            />
          }
        />
<Route path='/upload' element={<Upload/>}/>
        <Route
          path="/"
          element={
            <Signup
              setEmail={setEmail}
              setPassword={setPassword}
              setContact={setContact}
              setAddress={setAddress}
              setName={setName}
              handleAction={() => handleAction(2)}
              title={"Register"}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
