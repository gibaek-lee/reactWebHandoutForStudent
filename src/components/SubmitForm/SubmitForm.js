import React, { Component } from 'react';
import './SubmitForm.css';

class SubmitForm extends Component {
  state = { disabled: false }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.postAnswer();
    this.props.didSubmitAtForm(true);
    this.setState({ disabled: true });
    console.log("Submit button disabled, answer submitted");
  }

  render() {
    return (
      <form
        className="SubmitForm"
        onSubmit={this.handleSubmit}
      >
        <button
          type="submit"
          disabled={this.state.disabled}
        >
        제출
        </button>
      </form>
    )
  }
}

export default SubmitForm;
