import React from 'react';
import { API } from '../../backend';

const PicHelper = ({product}) => {
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80`;
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        alt=""
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
}

export default PicHelper;