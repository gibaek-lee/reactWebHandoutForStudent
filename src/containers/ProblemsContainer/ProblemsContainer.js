import React, { Component } from 'react';
import { WholeWrapper, ProblemResultWrapper, SubmitForm } from '../../components';
//import * as service from '../../services/get';
import * as services from '../../services';

class ProblemsContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      getting: false,
      problems: [
        {
          id: 1,
          problem_text: '',
          type: 0,
          choices: "[]"
        }
      ],
      input: [
        {
          id: 1,
          answer: ""
        }
      ],
      results: [
        {
          id: 1,
          result: false,
          answer: "2"
        }
      ],
      didSubmit: false,
      gotResult: false,
    }
  }

  componentDidMount() {
    this.getProblemsData();
  }

  componentDidUpdate(prevState) {
    if(prevState.input !== this.state.input) {//조건이 빈약해서 작동하지 않고있음
      console.log('Current input state');
      console.log(this.state.input);
    }
  }

  getProblemsData = async () => {
    this.setState({
      getting: true //requesting
    });
    try {
      const problemData = await services.getData();
      this.setState({
        getting: false,//requesting done
        problems: problemData.data.problems
      });
      console.log("Success to get problemData");
      console.log(problemData);
    } catch(error) {
      this.setState({
        getting: false
      });
      console.log(`get error occured, ${error}`);
    }
  }

  postAnswer = async () => { //try-catch 사용 안하고 post.js에 axios.post().then().catch()로 사용
    this.setState({
      getting: true, //requesting
    });
    const resultData = await services.postData(JSON.stringify(this.state.input));
    if(!resultData) { //prevent cannot read property 'map' of undefined
      this.setState({
        getting: false,//requesting done
        results: [
          {
            id: 1,
            result: false,
            answer: ""
          }
        ]
      });
    } else { //get response success
      this.setState({
        getting: false,//requesting done
        results: resultData,
        gotResult: true
      });
    }
  }

  makeInput = (id, answer) => {//사용자 정답 추출하기
    const { input } = this.state;
    const foundIndex = input.findIndex((element) => {
      return element.id === id
    });
    if(foundIndex < 0) {//만일 id 없으면 맨 뒤에 추가하고
      this.setState({
        input: [
          ...input,
          {
            id,
            answer
          }
        ]
      });
      console.log('input success: answer added');
    }
    if(foundIndex >= 0) {//id 있으면 수정하기
      this.setState({
        input: [
          ...input.slice(0,foundIndex),
          {
            id,
            answer
          },
          ...input.slice(foundIndex+1,input.length)
        ]
      });
      console.log('input success: answer modified');
    }
  }
  didSubmitAtForm = (bool) => {
    this.setState({
      didSubmit: bool
    })
  }

  render() {
    const { problems, results, gotResult, didSubmit } = this.state;
    return (
      <WholeWrapper>
          <ProblemResultWrapper
            problems={problems}
            makeInput={this.makeInput}
            results={results}
            didSubmit={didSubmit}
            gotResult={gotResult}
          />
          <SubmitForm
            postAnswer={this.postAnswer}
            didSubmitAtForm={this.didSubmitAtForm}
          />
      </WholeWrapper>
    );
  }
}

export default ProblemsContainer;
