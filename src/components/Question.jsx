import React, { Component } from 'react';
import '../css/Question.css';
import { data } from '/data.js';


class Question extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    var nextQuestion = this.state.nextQuestion + 1;
  }  
  
  render() {

    return (
      <div>
        <button onClick={()=> this.handleClick()}>Next</button>
      </div>
    );
  }
}

export default Question;