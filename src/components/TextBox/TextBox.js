import React, { Component} from 'react';
import './TextBox.css';

class TextBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }
  componentDidUpdate(prevProps, prevState){
    /*
    makeInput()을 handleChange에서 실행시키면 실제 DOM 변화가 일어나기 전에
    onChange 이벤트가 발생해서 state 업데이트가 이루어지지 않은 채로 makeInput()이
    실행되어 현재 입력값이 들어가지 않고 이전 입력값까지 들어가게 되는 오류가 발생함.
    그러므로 실제 DOM 변화 후의 LifeCycle인 componentDidUpdate에서 실행시켜 줘야함.
    */
    const { id, makeInput } = this.props;
    const { value } = this.state;
    if(prevState.value !== value){//이 조건이 없으면 makeInput()이 무한루프 된다.
      makeInput(id, this.state.value);
    }
  }
  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }
  render () {
    const { value } = this.state;
    return (
      <div className="TextBox">
        <input
          type="text"
          name="TextBox"
          value={value}
          /*method(param)이 onChange에 전달되면 무한루프. 그러므로 ()=>method(param)을 전달해야 한다.*/
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default TextBox;
