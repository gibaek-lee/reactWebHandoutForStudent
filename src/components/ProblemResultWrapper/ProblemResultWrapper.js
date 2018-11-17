import React from 'react';
import './ProblemResultWrapper.css';
import { ProblemList, ResultList } from '../'

const ProblemResultWrapper = ({ problems, makeInput, results, didSubmit, gotResult }) => (
  <div className="ProblemResultWrapper">
    <ProblemList
      problems={problems}
      makeInput={makeInput}
      didSubmit={didSubmit}
      results={results}
    />
    <ResultList
      results={results}
      gotResult={gotResult}
    />
  </div>
)

export default ProblemResultWrapper;
