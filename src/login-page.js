import React, {Component} from "react";

class LoginPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }

  handleInput = (event) => {
    //console.log(event.target.value, event.target.name)
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  displayLogin(){
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <h1 className="heading">Welcome to Login Page</h1>
        
        <div className="bottom-space">
          <label className="lable-Text">Enter your Email Id :</label>
          <input type="email" placeholder="Please enter your email id" className="input-space" onChange={this.handleInput} name="email"/>
        </div>

        <div className="bottom-space">
          <label className="lable-Text">Enter your Password :</label>
          <input type="password" placeholder="Please enter your password" className="input-space" onChange={this.handleInput} name="password"/>
        </div>

        <div className="bottom-space">
          <button onClick={() => this.displayLogin()}>Login</button>
        </div>

        <div>
          <h2>The typed email is - {this.state.email}</h2>
          <h2>The typed password is - {this.state.password}</h2>
        </div>
      </div>
    )
  }
}

export default LoginPage;