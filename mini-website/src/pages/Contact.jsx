import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div>
                <h1 className=" p-5 m-5 text-align-center">If Face Any Problem Please Contact Us</h1>
                <form className="row g-3 p-3 m-5">
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="inputEmail4" placeholder="First Name"/>
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="inputPassword4" placeholder="Last Name"/>
                    </div>
                    <div className="col-12">
                        <input type="email" className="form-control" id="inputAddress" placeholder="name@example.com" />
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Address" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" id="inputCity" placeholder="City"/>
                    </div>
                    <div className="col-md-4">
                        <select id="inputState" className="form-select">
                        <option selected>District</option>
                        <option>Dhaka</option>
                        <option>Comilla</option>
                        <option>Barishal</option>
                        <option>Khulna</option>
                        <option>Rajshahi</option>
                        <option>Sylhet</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <input type="text" className="form-control" id="inputZip" placeholder="Zip"/>
                    </div>
                    <div className="col-12">
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Enter Message" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary fw-bold">Send</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Contact;