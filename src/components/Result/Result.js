import React from 'react';
import './Result.css';

const Result = ({ id, result }) => (
  <div className="Result">
    {id}. {result}
  </div>
)

export default Result;
