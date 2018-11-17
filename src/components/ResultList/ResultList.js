import React from 'react';
import './ResultList.css';
import { Result } from '../';

const ResultList = ({ results, gotResult }) => {
  if(gotResult) {
    const mapResults = results.map(
      (element, index) => (
        <Result
          id={element.id}
          result={element.result}
          key={index}
        />
      )
    );
    return (
      <ul className="ResultList">
        {mapResults}
      </ul>
    )
  }
  return (
    <ul className="ResultList">
    </ul>
  )
}

export default ResultList;
