import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './components/App';
import {buildFirebase} from './clients/firebase.js';

let questions = {}
var database = buildFirebase();
var databaseRef = database.ref("/questions");
databaseRef.once("value").then(function(data) {
 const questions = Object.values(data.val());
 console.log(questions);
});
ReactDOM.render(<App />, document.getElementById('root'));
