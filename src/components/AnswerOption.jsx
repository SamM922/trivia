import React, { Component } from 'react';
import '../css/AnswerOption.css';

class AnswerOption extends Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        this.props.handleAnswer(this.props.index)
    }
    render() {
      return (
        <button onClick={()=> this.handleClick()} class="answer">
            {this.props.option}
        </button>
      );
    }
  }
  
  export default AnswerOption;