import React from 'react';
import { API } from "../backend";
import "../styles.css"
import Base from "./Base";

export default function Home() {
  console.log("API IS", API);
  return (
    <Base title="Home Page" description="Welcome to the store">
      <div className="row">
        <div className="col-4">
          <button className="btn btn-success">Test1</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">Test2</button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">Test3</button>
        </div>
      </div>
    </Base>
  );
}
