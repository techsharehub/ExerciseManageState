import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    value1 : Math.floor(Math.random() * 100),
    value2 : Math.floor(Math.random() * 100),
    value3 : Math.floor(Math.random() * 100),
    proposedAnswer : 0,
    numQuestions : 0,
    numCorrect : 0
  };
  calculate = () => {
    this.setState((currState)=>({
      proposedAnswer : Math.floor(Math.random() * 3) + currState.value1 + currState.value2 + currState.value3
    }))
  }

  nextQuestion = () => {
    this.setState((currState) => ({
      numQuestions : currState.numQuestions + 1,
      value1 : Math.floor(Math.random() * 100),
      value2 : Math.floor(Math.random() * 100),
   	  value3 : Math.floor(Math.random() * 100)
    }))
  }

  isCorrect = () => {
     this.setState((currState)=> {
      let correct = currState.numCorrect
      if ((currState.value1 + currState.value2 + currState.value3) === currState.proposedAnswer)
      {
        correct += 1;
      }
       this.nextQuestion();
       this.calculate();
      return({
		numCorrect : correct
      })
     })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App" onLoad={this.calculate}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.isCorrect}>True</button>
          <button onClick={this.isCorrect}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
