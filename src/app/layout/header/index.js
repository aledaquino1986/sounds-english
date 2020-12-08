import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <ul className="header-list">
        <Link exact to="/">
          <li>Home</li>
        </Link>

        <Link to="/vowels">
          <li>Vowels</li>
        </Link>

        <Link to="/consonants">
          <li>Consonants</li>
        </Link>

        <Link to="/about-us">
          <li>About us</li>
        </Link>

        <Link to="/cards">
          <li>Cards</li>
        </Link>
      </ul>
    </header>
  );
}
