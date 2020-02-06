import React, { Component } from 'react';
import '../css/App.css';
import Question from '../components/Question';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Question question_text="this is a question"></Question>
      </div>
    );
  }
}

export default App;