import React, {Component} from "react";
import axios from "axios";

class Trash extends Component{

  onDelete(){
    const url = "https://reqres.in/api/users/2";

    axios.delete(url)
      .then((response) => {
        console.log(response.data)
        alert("Profile deleted successfully")
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render(){
    return(
      <div>
        <h1>This is a Trash Page</h1>
        <button onClick={() => this.onDelete()}>Delete User</button>
      </div>
    )
  }
}

export default Trash;