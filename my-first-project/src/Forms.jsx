import React from 'react';

const Forms = () => {
    return (
        <div>
           <form className="m-5 p-5 bg-info-subtle rounded-2">
  <div>
    <div className="mb-3">
      <label htmlfor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
      <label htmlfor="exampleInputPassword1" className="form-label fw-bold">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input fw-bold" id="exampleCheck1" />
      <label className="form-check-label" htmlfor="exampleCheck1 fw-bold">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary fw-bold">Submit</button>
  </div>
</form>


        </div>
    );
};

export default Forms;