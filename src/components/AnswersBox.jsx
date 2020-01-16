import React, { Component } from 'react';
import '../css/AnswersBox.css';

class AnswersBox extends Component {
  
    render() {
        let answerOptions = [];
        let answerOptions_ = [];
        for(let i = 0; i > answerOptions.length; i++) {
            answerOptions_.push(<AnswerOption title={answerOptions[i]}/>);
        }
      return (
        <div>
            
        </div>
      );
    }
  }
  
  export default AnswersBox;