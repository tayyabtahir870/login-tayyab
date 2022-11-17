import React from "react";

function Passward({passwardReset,setEmail}) {
  return (
    <div>
      <div class="container text-center mt-5 p-5">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <div className="card">
                <input className="mt-3" type="text" placeholder="Enter your Email" 
                onChange={(e)=>setEmail(e.target.value)}/>
                <button type="button" className=" mt-2 mb-1 btn btn-primary" onClick={passwardReset}>Verify</button>

            </div>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Passward;
