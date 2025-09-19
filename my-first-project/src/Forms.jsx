import React from 'react';

const Forms = () => {
    return (
        <div>
            <form>
                <div>
                <div classname="mb-3">
                    <label htmlfor="exampleInputEmail1" classname="form-label">Email address</label>
                    <input type="email" classname="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div classname="mb-3">
                    <label htmlfor="exampleInputPassword1" classname="form-label">Password</label>
                    <input type="password" classname="form-control" id="exampleInputPassword1" />
                </div>
                <div classname="mb-3 form-check">
                    <input type="checkbox" classname="form-check-input" id="exampleCheck1" />
                    <label classname="form-check-label" htmlfor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" classname="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    );
};

export default Forms;