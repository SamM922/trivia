import React, { Component } from 'react';
import AnswerOption from './AnswerOption.jsx';
import '../css/AnswersBox.css';
import questions from '../data';

class AnswersBox extends Component {
    constructor(props) {
        super(props);
        this.state = ({
          questionNumber:0,
          choiceNumber: 0
        })
    }
    handleAnswer = (event) => {
      this.props.onAnswer(event.target.value);
    }
    render() {

      return (
        <div className="answers">
          <AnswerOption option={questions[this.state.questionNumber].choices[0]}></AnswerOption>
          <AnswerOption option={questions[this.state.questionNumber].choices[1]}></AnswerOption>
          <AnswerOption option={questions[this.state.questionNumber].choices[2]}></AnswerOption>
          <AnswerOption option={questions[this.state.questionNumber].choices[3]}></AnswerOption>
        </div>
      );
    }
  }
  
  export default AnswersBox;