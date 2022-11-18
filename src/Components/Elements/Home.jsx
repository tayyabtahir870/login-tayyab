import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("auth");
    if (authToken) {
      navigate("/home");
    }
    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    sessionStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <div className="homee">
      <div className="container py-5 ">
        <div className="row">
          <div className="col-md-6 mt-5 p-5">
          <div className="card ">
              <div>
                <h2>Welcome To Home</h2>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={logout}
                >
                  Logout
                </button>
                
              </div>
              <Link to="/details"
                  type="button"
                  className=" my-2 btn btn-primary"
                  onClick={logout}
                >
                  show Details
                </Link>
            </div>
       
            
          </div>
          <div className="col-md-6 signup p-5 mt-5">
          <img className="img-fluid homeimg " src="Assests/home.jpg" alt="" width={500} />
           
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Home;
