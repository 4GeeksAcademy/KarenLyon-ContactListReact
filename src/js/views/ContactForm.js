import React, { useContext } from "react";
import "../../styles/home.css";

export const ContactForm = () => {
return(
<div className="p-5">
<div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name"/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Email</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Email"/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">Adress</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Adress"/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Phone</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Phone"/>
</div>
<div class="d-grid gap-2">
<button class="btn btn-primary" type="button">Button</button>
</div>

  {/* <link to="/">Back to agenda</link>   */}

  </div>  )
    
}

