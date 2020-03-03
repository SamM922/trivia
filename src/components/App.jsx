import React, { Component } from "react";
import "../css/App.css";
import Question from "../components/Question";
import AnswerOption from "./AnswerOption";
import AnswersBox from "./AnswersBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      correctChoice: 3
    };
  }
  onNext = () => {
    if (this.state.questionNumber > 50) {
        alert("This is the end of the questions. Thanks for playing!")
    } else {
      this.setState({
        questionNumber: this.state.questionNumber + 1,
        correctChoice: this.props.data[this.state.questionNumber + 1]
          .correct_choice_index
      });
    }
  };
  onPrev = () => {
    if (this.state.questionNumber < 1) {
      alert("This is the first question");
    } else {
      this.setState({
        questionNumber: this.state.questionNumber - 1,
        correctChoice: this.props.data[this.state.questionNumber - 1]
          .correct_choice_index
      });
    }
  };
  handleAnswer = index => {
    if (index === this.state.correctChoice) {
      alert("Correct! Click Next to Continue");
    } else {
      alert("Incorrect! Try Again or Skip this Question");
    }
  };
  render() {
    return (
      <div className="app">
        <div className="question-index">{this.state.questionNumber + 1}</div>
        <Question
          question_text={
            this.props.data[this.state.questionNumber].question_text
          }
          onNext={this.onNext}
        />
        <button className="prev-button" onClick={() => this.onPrev()}>
          Previous
        </button>
        <button className="prev-button" onClick={() => this.onNext()}>
          Next
        </button>
        <AnswersBox
          handleAnswer={this.handleAnswer}
          questionNumber={this.state.questionNumber}
          choices={this.props.data[this.state.questionNumber].choices}
          onNext={this.onNext}
        />
      </div>
    );
  }
}

export default App;
