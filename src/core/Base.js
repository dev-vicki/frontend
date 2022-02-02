import React from 'react';
import Nav from './Nav';
import styles from "../styles.css"

const Base = ({
  title = "My title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => (
  <div>
  <Nav/>
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer fixed-bottom bg-dark">
      <div className="container-fluid sm-success text-white text-center">
        <h6>If you got any questions feel free to reach out</h6>
        <button className="btn btn-warning btn-sm">Contact Us</button>
      </div>
      {/* <div className="container">
        <span className="text-muted text-white">
          An Amazing place to buy things..
        </span>
      </div> */}
    </footer>
  </div>
);

export default Base;