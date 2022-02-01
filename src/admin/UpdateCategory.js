import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { createCategory } from "./helper/adminapicall";


const UpdateCategory = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const { user, token} = isAuthenticated();

    const goBack =() => {
        return <div className="mt-5">
            <Link className='btn btn-sm btn-success mb-3' to="/admin/dashboard">Admin Home</Link>
        </div>
    }

     const handleChange = (event) => {
        setError("");
        setName(event.target.value)
    }

     const onSubmit = (event) => {
       event.preventDefault();
       setError("");
       setSuccess(false);

       //  backend request fired
       createCategory(user._id, token, { name }).then((data) => {
         if (data.error) {
           setError(true);
         } else {
           setError("");
           setSuccess(true);
           setName("");
         }
       });
     };

          const successMessage = () => {
            if(success){
                return <h4 className='text-success'>Category Upadted Successfully</h4>
            }
     }

      const warningMessage = () => {
           if (error) {
             return (
               <h4 className="text-warning">Failed to Update Category </h4>
             );
           }
      };


    const myCategoryForm = () => (
      <form>
        <div className="form-group">
          <p className="lead">Update the Category</p>
          <input
            type="text"
            className="form-control my-3"
            onChange={handleChange}
            value={name}
            placeholder="For Ex. fiction"
            autoFocus
            required
          />
          <button onClick={onSubmit} className="btn btn-outline-info mb-2">
            Update Category
          </button>
        </div>
      </form>
    );

    return (
      <Base
        title="Update category here"
        description="Update category for your products here"
        className="container bg-info p-4"
      >
        <div className="row bg-white rounded">
          <div className="col-md-8 offset-md-2">
            {successMessage()}
            {warningMessage()}
            {myCategoryForm()}
            {goBack()}
          </div>
        </div>
      </Base>
    );
}


export default UpdateCategory;
