import React, {Fragment} from 'react';
import {Link, withRouter} from "react-router-dom"
import {signout, isAuthenticated} from "../auth/helper"

const currentNav = (history, path) => {
    if(history.location.pathname === path){
        return { color: "#1FAA59" };
    } else {
        return {color: "#FFF"}
    }
}

const Nav = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link style={currentNav(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentNav(history, "/user/dashboard")}
          className="nav-link"
          to="/user/dashboard"
        >
          Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentNav(history, "/admin/dashboard")}
          className="nav-link"
          to="/admin/dashboard"
        >
          A. Dashboard
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentNav(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      {!isAuthenticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              style={currentNav(history, "/signup")}
              className="nav-link"
              to="/signup"
            >
              Sign up
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentNav(history, "/signin")}
              className="nav-link"
              to="/signin"
            >
              Sign in
            </Link>
          </li>
        </Fragment>
      )}
      {isAuthenticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
  </div>
);

export default withRouter(Nav);