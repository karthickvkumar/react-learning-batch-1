import React, {Component} from "react";
import axios from "axios";

class Inbox extends Component{

  listUser(){
    const url = "https://reqres.in/api/users?page=2";

    axios.get(url)
      .then((response) => {
        // Success Code Block
        console.log(response.data)
      })
      .catch((error) => {
        // Error Code Block
        console.log(error)
      })
  }

  render(){
    return(
      <div>
        <h1>This is a Inbox Page</h1>
        <button onClick={() => this.listUser()}>List All Users</button>
      </div>
    )
  }
}

export default Inbox;