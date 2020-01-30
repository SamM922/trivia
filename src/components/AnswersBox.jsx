import React, { Component } from 'react';
import AnswerOption from 'AnswerOption.jsx';
import '../css/AnswersBox.css';
import { data } from '/data.js';

class AnswersBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let answerOptions = [];
        let answerBoxes = [];
        for(let i = 0; i > answerOptions.length; i++) {
            answerBoxes.push(<AnswerOption text={answerOptions[i]}/>);
        }
      return (
        <div>
              {answerBoxes}
        </div>
      );
    }
  }
  
  export default AnswersBox;