import React, { Component } from 'react';
import '../css/Question.css';
import question from'../sample_data.json';
// import components


class Question extends Component {
  
  render() {
    let questionData = question;

    let questionList = ["In which film did Bill Murray play the character Dr. Peter Venkman?",
  "On 'Legally Blonde', what is Warner's nickname for Elle?", 
  "What was the name of Jack Black's character in the movie 'School of Rock'?"];

    for (let i = 0; i < questionData; i++){
      
    }

    return (
      <div>
        <h1> </h1>
      </div>
    );
  }
}

export default Question;