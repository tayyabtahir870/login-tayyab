import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Login from './Components/Elements/Login';
import {useNavigate,Routes,Route} from 'react-router-dom'
import {getAuth ,signInWithEmailAndPassword , createUserWithEmailAndPassword} from 'firebase/auth'; 
import Signup from './Components/Elements/Signin';
import { collection, addDoc } from "firebase/firestore"; 

import db from './firebase'

import Base from './Components/Layouts/Base';
import { ToastContainer, toast } from "react-toastify";
import {useState,useEffect} from 'react'
import Home from './Components/Elements/Home';


function App() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("auth");
    if (authToken) {
      navigate("/home");
    }
  }, [navigate]);

  const handleAction =(id) => {
    const authenticate = getAuth();
    if (id===2){
      createUserWithEmailAndPassword(authenticate,email,password).then((response)=>{
        navigate("/home");
        sessionStorage.setItem("auth", response._tokenResponse.refreshToken);
        addDoc(collection(db, "users"), {
         email:email,
          password: password,
         
        });

      }).catch((e) => {
        if (e.code === "auth/wrong-password") {
          toast.error("please check the password");
        }
        if (e.code === "auth/user-not-found") {
          toast.error("please check the email");
        }
      });
  };
    
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
  }
  return (
    <div className="App">
     <ToastContainer/>
     <Base>
     
     <Routes>
     <Route path='/home' element={<Home/>}/> 
      <Route path='/login' element={<Login
       setEmail={setEmail} 
       setPassword={setPassword}
        handleAction={()=>handleAction(1)} 
        title={"Login"} />
        }/>

      <Route  path='/signup' element={<Signup
       setEmail={setEmail} 
       setPassword={setPassword} 
       handleAction={()=>handleAction(2)}
        title={"Register"}
      />}
      />
     </Routes>
     </Base>
     
     
     

    </div>
  );
}

export default App;
