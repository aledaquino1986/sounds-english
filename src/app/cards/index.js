import React from "react";
import "./styles.css";

export default function Cards({ sound, description }) {
  return (
    <div className="card">
      <div className="box">
        <div className="content">
          <h2>{sound}</h2>
          <h3>{sound}</h3>
          <p>{description}</p>
          <ul>
            <li>
              Fleece
              <button>Play</button>
              <button>Pause</button>
            </li>
            <li>Sea</li>
            <li>Machine</li>
          </ul>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
}
