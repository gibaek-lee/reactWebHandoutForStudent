import React from 'react';
import './Problem.css';

const Problem = ({ id, text }) => (
  <div className="Problem">
    {id}. {text}
  </div>
)

export default Problem;
