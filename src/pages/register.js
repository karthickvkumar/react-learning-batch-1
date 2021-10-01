import React, { Component } from "react";

class RegisterPage extends Component{

  constructor(props){
    super(props);
    this.state = {
      first_name : '',
      last_name : '',
      email_id : '',
      password : '',
      gender : '',
      date_of_birth : '',
      address : '',
      city : '',
      isVisible : true,
      showPassword : false
    }
  }

  onHandleInput = (event) => {
    this.setState({
      [event.target.name] : event.target.value 
    })
  }

  onCreateAccount(){
    console.log(this.state)
  }

  showImage(){
    this.setState({
      isVisible : true
    })
  }

  hideImage(){
    this.setState({
      isVisible : false
    })
  }

  showOrHideImage(){
    this.setState({
      isVisible : !this.state.isVisible
    })
  }

  hideShowPassoword(status){
    this.setState({
      showPassword : status
    })
  }

  render(){
    
    let student_name = "Karthick Kumar !!";
   
    return(
      <div>
        <h1>Register Page</h1>

        <button onClick={() => this.showImage()}>Show Image</button>
        <button onClick={() => this.hideImage()}>Hide Image</button>

        <button onClick={() => this.showOrHideImage()}>Show or Hide Image</button>

        { this.state.isVisible && <div>
          <img src={require("../images/shinchu.jpg").default} className="car-img"/>
        </div> }
        
        <div className="bottom-space">
          <label className="lable-Text">Enter First Name :</label>
          <input className="input-space" type="text" placeholder="Please enter your first name.." onChange={this.onHandleInput} name="first_name"/>
        </div>
        <div className="bottom-space">
          <label className="lable-Text">Enter Last Name :</label>
          <input className="input-space" type="text" placeholder="Please enter your last name.." onChange={this.onHandleInput} name="last_name"/>
        </div>
        <div className="bottom-space">
          <label className="lable-Text">Enter Email ID :</label>
          <input className="input-space" type="text" placeholder="Please enter your email id.." onChange={this.onHandleInput} name="email_id"/>
        </div>
        <div className="bottom-space icon-align">
          <label className="lable-Text">Enter your Password :</label>
          <input className="input-space" 
          type={this.state.showPassword ? "text" : "password"} 
          placeholder="Please enter your password.." onChange={this.onHandleInput} name="password"/>
          
          { this.state.showPassword ? 
            <img src={require("../images/open-eye.png").default} className="icon"
            onClick={() => this.hideShowPassoword(false)}/> 
            :
            <img src={require("../images/close-eye.jpg").default} className="icon"
            onClick={() => this.hideShowPassoword(true)}/>
          }

        </div>
        <div className="bottom-space">
          <label className="lable-Text">Select your Gender :</label>
          <input className="font" type="radio" name="gender" onChange={this.onHandleInput} value="Male"/>Male
          <input className="font" type="radio" name="gender" onChange={this.onHandleInput} value="Female"/>Female
          <input className="font" type="radio" name="gender" onChange={this.onHandleInput} value="Others"/>Others
        </div>
        <div className="bottom-space">
          <label className="lable-Text">Select your DOB :</label>
          <input type="date" className="input-space" onChange={this.onHandleInput} name="date_of_birth"/>
        </div>
        <div className="bottom-space center-text">
          <label className="lable-Text">Enter your Address :</label>
          <textarea placeholder="Please enter your address.."  className="input-space" onChange={this.onHandleInput} name="address"></textarea>
        </div>
        <div className="bottom-space center-text">
          <label className="lable-Text">Select your City :</label>
          <select className="input-space" onChange={this.onHandleInput} name="city">
            <option>Please select any city</option>
            <option>Chennai</option>
            <option>Mumbai</option>
            <option>Banglore</option>
            <option>Delhi</option>
            <option>Cochin</option>
          </select>
        </div>
        <button className="create-btn" onClick={() => this.onCreateAccount()}>Create Account</button>
        <h1>The student name is {student_name}</h1>
        <h1>The student name is {this.state.first_name}</h1>
      </div>
    )
  }
}

export default RegisterPage;