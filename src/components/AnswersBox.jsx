import React, { Component } from 'react';
import AnswerOption from './AnswerOption.jsx';
import '../css/AnswersBox.css';
import questions from '../data';

class AnswersBox extends Component {
    constructor(props) {
        super(props);
    }
    handleAnswer = (index) => {
        console.log(index);
        this.props.handleAnswer(index);
    }
    render() {
      return (
        <div className="answerBox">
          <AnswerOption handleAnswer={this.handleAnswer} index={0} option={this.props.choices[0]}></AnswerOption>
          <AnswerOption handleAnswer={this.handleAnswer} index={1} option={this.props.choices[1]}></AnswerOption>
          <AnswerOption handleAnswer={this.handleAnswer} index={2} option={this.props.choices[2]}></AnswerOption>
          <AnswerOption handleAnswer={this.handleAnswer} index={3} option={this.props.choices[3]}></AnswerOption>
        </div>
      );
    }
  }
  
  export default AnswersBox;