import React from 'react';
import './DashBar.css';
import { Link } from 'react-router-dom';

export default function DashBar(props) {
  return (
    <div className="dash-bar">
      <h2>{props.language}</h2>
      <p>Total correct answers: {props.total_score}</p>

      <Link to={'/learn'} className="practice-link red-back">
        Start practicing
      </Link>
    </div>
  );
}
