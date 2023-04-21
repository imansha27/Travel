import React,{Component} from "react";






export class userprofile extends Component {


  constructor(props){
    super(props);
    this.state={
      userData:"",
      
    };
  }

  componentDidMount() {
     
    
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
       
        
      }),
    })
  
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
         this.setState({userData:data.data});
         console.log(data.data);
      })
      .catch((error) => {
        console.log("Error:", error); 
      });


   
  }

  logOut=()=>{
    window.localStorage.clear();
    window.location.href="/";
  }
  Recharge=()=>{
    window.location.href="/userpackages";
  }


  render()
 
  {
    
    
    return(
      <div className="container"><center><br></br>
      <h2 className="title">
            YOUR PROFILE<br></br><br></br>
      </h2>
      <div
        style={{border: '1px solid blue', borderRadius: '30px'}}
      >
        <b>First Name:</b><br></br>{this.state.userData.fname}<br></br><br></br>
        <b>Last Name:</b><br></br>{this.state.userData.lname}<br></br><br></br>
        <b>Country:</b><br></br>{this.state.userData.Country}<br></br><br></br>
        <b>Card Balance:</b><br></br>{this.state.userData.Price}<br></br><br></br>
        <b>Email:</b><br></br>{this.state.userData.Email}<br></br><br></br>
        <b>Username:</b><br></br>{this.state.userData.Username}<br></br><br></br>
        </div>
        
         

       <button onClick={this.logOut} className="button">LOGOUT</button>
        <button onClick={this.Recharge} className="button">RECHARGE </button> 


    
         </center>

         </div>
     );
    
     }
  
}


