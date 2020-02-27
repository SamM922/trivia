import React, { Component } from "react";
import "../css/App.css";
import Question from "../components/Question";
import AnswerOption from "./AnswerOption";
import AnswersBox from "./AnswersBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0
    };
  }
  //onAnswer = answer => {
    //right or wrong
    //if(amswer === this.state[this.state.questionNumber].correct_aswer_index {
    //}
  //};
  onNext = () => {
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  };
  render() {
    const { answer } = this.state;

    return (
      <div className="app">
        <Question
          question_text={
            this.props.data[this.state.questionNumber].question_text
          }
          onNext={this.onNext}
        />
        <AnswersBox
          questionNumber={this.state.questionNumber}
          choices={this.props.data[this.state.questionNumber].choices}
          onNext={this.onNext}
        />
      </div>
    );
  }
}

export default App;
