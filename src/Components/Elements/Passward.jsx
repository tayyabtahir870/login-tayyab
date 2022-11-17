import React from "react";

function Passward({passwardReset,setEmail}) {
  return (
    <div>
      <div class="container text-center ">
        <div class="row">
          <div class="col-md-6 mt-5 p-5">
          <div className="card">
                <input className="mt-3" type="text" placeholder="Enter your Email" 
                onChange={(e)=>setEmail(e.target.value)}/>
                <button type="button" className=" mt-2 mb-1 btn btn-primary" onClick={passwardReset}>Verify</button>

            </div>
          </div>
          <div class="col-md-6">
           <img className="img-fluid mt-5" src="Assests/password.jpg" alt="" width={500} />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Passward;
