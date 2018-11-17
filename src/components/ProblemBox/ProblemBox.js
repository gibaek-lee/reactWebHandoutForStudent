import React from 'react';
import './ProblemBox.css';
import { Problem, Answer } from '../';

const ProblemBox = ({ problem, makeInput, didSubmit, results, index }) => {
  const { id, type, problem_text, choices } = problem;
  return (
    <div  className="ProblemBox">
      <Problem
        id={id}
        text={problem_text}
      />
      <Answer
        id={id}
        type={type}
        choices={choices}
        results={results}
        makeInput={makeInput}
        didSubmit={didSubmit}
      />
    </div>
  )
}
export default ProblemBox;
