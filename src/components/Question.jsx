import React, { Component } from 'react';
import '../css/Question.css';
import question from'../sample_data.json';
// import components


class Question extends Component {
  constructor(props) {
    super(props);
  }
  

  handleClick() {
    var nextQuestion = this.state.nextQuestion + 1;
    let questionList = ["In which film did Bill Murray play the character Dr. Peter Venkman?",
  "On 'Legally Blonde', what is Warner's nickname for Elle?", 
  "What was the name of Jack Black's character in the movie 'School of Rock'?"];
  }  
  
  render() {
    let questionData = question;

    for (let i = 0; i < questionData; i++){
      
    }

    return (
      <div>
        <button onClick={()=> this.handleClick()}>Next</button>
      </div>
    );
  }
}

export default Question;