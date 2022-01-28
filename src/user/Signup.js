import React, {useState} from "react";
import Base from "../core/Base";
import {Link} from "react-router-dom";

const Signup = () => {

        const signUpForm = () => {
            return (
              <div className="row">
                <div className="col-md-6 0ffset-sm-3 text-left">
                  <form>
                    <div className="form-group">
                      <label className="text-light">Name</label>
                      <input className="form-control" type="text" />
                    </div>

                    <div className="form-group">
                      <label className="text-light">Email</label>
                      <input className="form-control" type="email" />
                    </div>

                    <div className="form-group">
                      <label className="text-light">Password</label>
                      <input className="form-control" type="password" />
                    </div>
                    <button className="btn btn-success btn-block mt-auto">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            );
        }

    return (
      <Base title="Sign up page" description="Signed up successfully">
        {signUpForm()}
      </Base>
    );
}

export default Signup;