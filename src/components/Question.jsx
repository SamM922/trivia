import React, { Component } from 'react';
import '../css/Question.css';
import { data } from '/data.js';


class Question extends Component {
  constructor(props) {
    super(props);
  }
  
  constructor(data) {
    const{choices, correct_choice_index, question_text, user_id} = data;
    this.choices = choices;
    this.correct_choice_index = correct_choice_index;
    this.question_text = question_text;
    this.user_id = user_id;
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