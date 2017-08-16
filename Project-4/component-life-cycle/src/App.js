import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <Body/>
      </div>
    );
  }
}

class Body extends Component {
    constructor(props){
        super(props);

        this.state = {
            r: 0
        };
        this.getRandomNumber = this.getRandomNumber.bind(this);
    }

    getRandomNumber() {
        // console.log("random number called");
        this.setState({r: Math.floor(Math.random()*10)});
    }

    render() {
        return (
            <div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.getRandomNumber}>Random number</button>
                <Numbers myNumber={this.state.r}/>
            </div>
        );
    }
}

class Numbers extends Component {
    render() {
        return(
            <div>
                <br/>
                <span>{this.props.myNumber}</span>
            </div>
        )
    }
}


export default App;