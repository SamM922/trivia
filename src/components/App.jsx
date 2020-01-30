import React, { Component } from 'react';
import '../css/App.css';
import Question from '../components/Question';
// import components

class App extends Component {
  constructor(data) {
    const{choices, correct_choice_index, question_text, user_id} = data;
    this.choices = choices;
    this.correct_choice_index = correct_choice_index;
    this.question_text = question_text;
    this.user_id = user_id;
  }
  render() {
    return (
      <div className="app">
        <Question></Question>
      </div>
    );
  }
}

export default App;