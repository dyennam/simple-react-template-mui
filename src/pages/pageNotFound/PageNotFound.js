import React from 'react';
import { Link } from 'react-router-dom';
import './pageNotFound.css';

export default function About() {
  return (
    <div className="center404page">
      <h1> 404 </h1>
      <hr className="pageNotFoundRedLine" />
      <h2> Page Not Found </h2>
      <p> Do you even internet!? </p>
      <Link to="/">Go to Home </Link>
    </div>
  );
}
