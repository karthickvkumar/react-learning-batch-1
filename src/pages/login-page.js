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
    console.log(event)
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

        <img src={require("../images/shinchu.jpg").default} style={{'width': '250px'}} alt="local"/>

        <img className="car-img" src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F2020-Chevrolet-Corvette-Stingray%2F960x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349" alt="url"/>
        
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