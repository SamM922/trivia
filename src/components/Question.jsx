import React, { Component } from 'react';
import '../css/Question.css';

class Question extends Component {
  constructor(props) {
    super(props);
  }


  // constructor(choices, correct_choice_index, question_text, user_id) {
  //   this.choices = choices;
  //   this.correct_choice_index = correct_choice_index;
  //   this.question_text = question_text;
  //   this.user_id = user_id;
  // }
  handleClick() {
    this.props.onNext();
  }

  render() {

    return (
      <div>
        <h1>{this.props.question_text}</h1>
        <button className="next-button" onClick={() => this.handleClick()}>Next</button>
      </div>
    );
  }
}

export default Question;