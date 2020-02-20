import React, { Component } from 'react';
import '../css/AnswerOption.css';

class AnswerOption extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div>
            {this.props.option}
        </div>
      );
    }
  }
  
  export default AnswerOption;