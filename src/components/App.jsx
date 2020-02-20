import React, { Component } from 'react';
import '../css/App.css';
import Question from '../components/Question';
import questions from '../data';
import AnswerOption from './AnswerOption';
import AnswersBox from './AnswersBox';

class App extends Component {

  constructor(props){
    super(props);
    this.state = ({
      questionNumber:0,
      answers:0
    })
  }
  onAnswer= (answer) => {
    //right or wrong
    //if(amswer === this.state[this.state.questionNumber].correct_aswer_index {

    //}
  }
  onNext = () => {
    this.setState({questionNumber: this.state.questionNumber + 1 });
    this.setState({answers: this.state.answers + 1})
  }
  render() {
    const {answer} = this.state;

    return (
      <div className="app">
        <Question question_text={questions[this.state.questionNumber].question_text} onNext={this.onNext}></Question>
        <AnswersBox choices={questions[this.state.questionNumber].choices} onNext={this.onNext}></AnswersBox>
      </div>
    );
  }
}

export default App;