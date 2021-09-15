import React, {Component} from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      message : "This is a state message"
    }
  }

  display(){
    // console.log("Hello, Welcome to React")
    this.setState({
      message : "Hello, Welcome to React"
    })
  }

  render(){
    return(
      <div>
        <h1>Hello! Welcome to React Learning</h1>
        <h1>Tutorial by Karthick</h1>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.display()}>Run the function</button>
      </div>
    )
  }

}

export default App;