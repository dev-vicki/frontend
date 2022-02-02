import React from 'react';
import { Link } from 'react-router-dom';
import Base from '../core/Base';


const Orders = () => {
  return (
    <Base title="Welcome admin" description="Manage product here">
      <Link className="btn btn-info mb-2" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <h2 className="mb-2">All Orders Here:</h2>
      <p>Need to integrate payment gateway...</p>
    </Base>
  );
}

export default Orders;