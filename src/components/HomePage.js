import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>React Application</h1>
      <p>Designed by Karthick</p>
      <p>Credits: Plural Sight</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
