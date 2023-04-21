import React, { Component } from 'react'

export default class SignUp extends Component {
  constructor(props){
    super(props)
    this.state={
      cardno:"",
      fname:"",
      lname:"",
      Country:"",
      Price:"",
      Email:"",
      Username:"",
      Password:""

    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const{cardno,fname,lname,Country,Price,Email,Username,Password}=this.state;
    // console.log(cardno,fname,lname,Country,Price,Email,Username,Password);
      fetch("http://localhost:5000/register",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
      body:JSON.stringify({
        cardno,
        fname,
        lname,
        Country,
        Price,
        Email,
        Username,
        Password
      }),
    })
    
  
    .then((res) => res.json())
    .then((data) => {
       console.log(data);
       console.log(data.status);
      // Check for error response
      if (data.status === "error") {
        // Display error message in prompt
        if (data.message === "1")
         {
          
            alert("CardId already exists. Please choose a different CardId.");
            console.log("CardId already exists. Please choose a different CardId.");
          
         

        } 
        
        else if (data.message === "2") {
         
          alert("Username already exists. Please choose a different Username.");
          console.log("Username already exists. Please choose a different Username.");
         
        } 
       else

        {
         // Handle other error cases
        alert("Error during registration");
        console.error("Error during registration",);
        }

      } else {
        // Handle success response
        alert("Registration successful");
        console.log("Registration successful");
      }
    })
    // .catch((error) => {
    //   // Handle fetch error
    
    //   console.error("Error during registration:", error);
    // });
}


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Register</h3>
        <div className="mb-3">
          <label>Travel Card</label>
          <input
            type="text"
            className="form-control"
            placeholder="Card No"
            onChange={(e)=>this.setState({cardno:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e)=>this.setState({fname:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" 
          onChange={(e)=>this.setState({lname:e.target.value})}/>
        </div>

        <div className="mb-3">
          <label>Country</label>
          <input
            type="Country"
            className="form-control"
            placeholder="Country"
            onChange={(e)=>this.setState({Country:e.target.value})}
          />
        </div>

       <div className="mb-3">
          <label>Price</label>
          <input
            type="Price"
            className="form-control"
            placeholder="$"
            onChange={(e)=>this.setState({Price:e.target.value})}
          />
        </div> 
  
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="Email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>this.setState({Email:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Username</label>
          <input
            type="Username"
            className="form-control"
            placeholder="Username"
            onChange={(e)=>this.setState({Username:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>this.setState({Password:e.target.value})}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Register User
          </button>
        </div>
        
      </form>
    )
  }
}
