import React, { Component } from 'react';
// import components


class Question extends Component {
  
  render() {
    let questionList = ["In which film did Bill Murray play the character Dr. Peter Venkman?",
  "On 'Legally Blonde', what is Warner's nickname for Elle?", 
  "What was the name of Jack Black's character in the movie 'School of Rock'?"];
    let questions = [];
    for (let i = 0; i < questions; i++){
      questions.push(<h1> </h1>)
    }
    return (
      <div>
        <h1> In which film did Bill Murray play the character Dr. Peter Venkman?</h1>
        Add your QuestionText, Reset Button and AnswerButtons here.  
      </div>
    );
  }
}

export default Question;