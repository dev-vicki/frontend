import React from 'react';
import {Link, withRouter} from "react-router-dom"

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
      <li className="nav-item">
        <Link
          style={currentNav(history, "/signout")}
          className="nav-link"
          to="/signout"
        >
          Sign out
        </Link>
      </li>
    </ul>
  </div>
);

export default withRouter(Nav);