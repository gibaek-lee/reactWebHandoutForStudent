import React from 'react';
import './ProblemList.css';
import { ProblemBox } from '../'

const ProblemList = ({ problems, makeInput, didSubmit, results }) => {
  const mapProblems = problems.map(
    (problem, index) => (
      <ProblemBox
        problem={problem}
        makeInput={makeInput}
        didSubmit={didSubmit}
        results={results}
        key={index}
      />
    )
  );
  return (
    <ul className="ProblemList">
      {mapProblems}
    </ul>
  )
}

export default ProblemList;
