import React, { Component } from 'react';
import AnswerOption from './AnswerOption.jsx';
import '../css/AnswersBox.css';
import questions from '../data';

class AnswersBox extends Component {
    constructor(props) {
        super(props);
    }
    handleAnswer = (event) => {
      this.props.onAnswer(event.target.value);
    }
    render() {

      return (
        <div className="answers">
          <AnswerOption option={questions[this.props.questionNumber].choices[0]}></AnswerOption>
          <AnswerOption option={questions[this.props.questionNumber].choices[1]}></AnswerOption>
          <AnswerOption option={questions[this.props.questionNumber].choices[2]}></AnswerOption>
          <AnswerOption option={questions[this.props.questionNumber].choices[3]}></AnswerOption>
        </div>
      );
    }
  }
  
  export default AnswersBox;