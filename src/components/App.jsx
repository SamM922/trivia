import React, { Component } from 'react';
import '../css/App.css';
import Question from '../components/Question';
// import components

class App extends Component {

  render() {
    return (
      <div className="app">
        Trivia!
        <Question></Question>
      </div>
    );
  }
}

export default App;