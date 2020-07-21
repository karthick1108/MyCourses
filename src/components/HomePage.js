import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="jumbotron">
      <h1>Hello Karthick</h1>
      <p>Welcome to React</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default Homepage;
