import React from 'react';
import './Answer.css';
import { CheckBox, TextBox } from '../'

const Answer = ({ id, type, choices, makeInput, didSubmit, results }) => {
  if(type === 1 && choices) {
    const choicesArray = JSON.parse(choices);
    let mapChoices = [];
    let mapChoicesAnswer = [];
    if(choicesArray) {
      mapChoices = choicesArray.map(
        (choice, index) => (
          <CheckBox
            id={id}
            choice={choice}
            makeInput={makeInput}
            didSubmit={didSubmit}
            key={index}
          />
        )
      );
      if(didSubmit) {
        mapChoicesAnswer = choicesArray.map(
          (choice, index) => (
            <CheckBox
              id={id}
              choice={choice}
              result={results[id]}
              didSubmit={didSubmit}
              key={index}
            />
          )
        );
      }
    }
    if(didSubmit) {
      return (
        <div>
          <form className="Answer">
            나의 답: {mapChoices}
          </form>
          <form className="Answer">
            정답: {mapChoicesAnswer}
          </form>
        </div>
      )
    }
    return (
      <form className="Answer">
        {mapChoices}
      </form>
    )
  }
  if(didSubmit) {
    return (
      <div>
        나의 답: <TextBox
          id={id}
          makeInput={makeInput}
        />
        정답: <TextBox
          id={id}
          makeInput={makeInput}
          result={results[id]}
        />
      </div>
    )
  }
  return (
    <TextBox
      id={id}
      makeInput={makeInput}
    />
  )
}

export default Answer;
