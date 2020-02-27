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
    this.setState({ questionNumber: this.state.questionNumber + 1, correctChoice: this.props.data[this.state.questionNumber + 1].correct_choice_index });
  };
  handleAnswer = (index) => {
    if (index === this.state.correctChoice) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
  }
  render() {

    return (
      <div className="app">
        <Question
          question_text={
            this.props.data[this.state.questionNumber].question_text
          }
          onNext={this.onNext}
        />
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
