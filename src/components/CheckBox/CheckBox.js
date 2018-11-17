import React, { Component } from 'react';
import './CheckBox.css';

class CheckBox extends Component {
  handleChange = () => {
    const { id, choice, makeInput } = this.props;
    makeInput(id, choice);
  }
  render () {
    const { choice, id, didSubmit, result, index } = this.props;

    if(didSubmit) {
      /*
      axios.post가 성공해서 results 받으면 checked된 박스를 보일 수 있다.
      if(Number(result.answer) === index) {
        return (
          <div className="CheckBox">
            <input
              type="radio"
              id={id}
              name="CheckBox"
              checked
            />{choice}
          </div>
        )
      }
      */
      return (
        <div className="CheckBox">
          <input
            type="radio"
            id={id}
            name="CheckBox"
          />{choice}
        </div>
      )
    }
    return (
      <div className="CheckBox">
        <input
          type="radio"
          id={id}
          name="CheckBox"
          onChange={this.handleChange}
        />{choice}
      </div>
    )
  }
}

export default CheckBox;
