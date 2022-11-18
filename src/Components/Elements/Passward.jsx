import React from "react";

function Passward({passwardReset,setEmail}) {
  return (
    <div>
      <div class="container text-center ">
        <div class="row">
          <div class="col-md-4 ">
         
          </div>
          <div class="col-md-4">
          <div className="card">
               
                
               <img className="img-fluid " src="Assests/password.jpg" alt="" width={500} />
               <input className="btn1" type="text" placeholder="Enter your Email" 
               onChange={(e)=>setEmail(e.target.value)}/>
               <button type="button" className=" my-3 btn btn-primary" onClick={passwardReset}>Verify</button>

           </div>
          </div>
          <div className="col-md-4">

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Passward;
